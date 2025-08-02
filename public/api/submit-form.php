<?php
// Load environment variables from .env file
function loadEnv($path) {
    if (!file_exists($path)) {
        throw new Exception('.env file not found');
    }
    
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '=') !== false && strpos($line, '#') !== 0) {
            list($key, $value) = explode('=', $line, 2);
            $key = trim($key);
            $value = trim($value);
            
            // Remove quotes if present
            if (preg_match('/^(["\']).*\1$/', $value)) {
                $value = substr($value, 1, -1);
            }
            
            $_ENV[$key] = $value;
            putenv("$key=$value");
        }
    }
}

// Load environment variables
loadEnv(__DIR__ . '/.env');

// Get environment variables with fallbacks
function getEnvVar($key, $default = null) {
    return $_ENV[$key] ?? getenv($key) ?? $default;
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: ' . getEnvVar('CORS_ORIGIN', '*'));
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Set timezone from environment
date_default_timezone_set(getEnvVar('TIMEZONE', 'Asia/Jerusalem'));

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON input']);
    exit;
}

// Validate required fields
$required_fields = ['full_name', 'phone_number', 'email', 'description'];
foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: $field"]);
        exit;
    }
}

// Sanitize input
$full_name = htmlspecialchars(trim($input['full_name']));
$phone_number = htmlspecialchars(trim($input['phone_number']));
$email = filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL);
$description = htmlspecialchars(trim($input['description']));

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}

try {
    // Check if all database environment variables are configured
    $db_host = getEnvVar('DB_HOST');
    $db_name = getEnvVar('DB_NAME');
    $db_username = getEnvVar('DB_USERNAME');
    $db_password = getEnvVar('DB_PASSWORD');
    
    $db_configured = !empty($db_host) && !empty($db_name) && !empty($db_username) && !empty($db_password);
    
    // Only process database operations if all DB env vars are configured
    if ($db_configured) {
        $pdo = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8mb4", $db_username, $db_password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Insert into database
        $stmt = $pdo->prepare("INSERT INTO leads (full_name, phone_number, email, description, created_at) VALUES (?, ?, ?, ?, NOW())");
        $stmt->execute([$full_name, $phone_number, $email, $description]);
    }
    
    // Send email notification using environment variables
    $to = getEnvVar('NOTIFICATION_EMAIL', 'liranah72@gmail.com');
    $subject_prefix = getEnvVar('EMAIL_SUBJECT_PREFIX', 'פנייה חדשה מהאתר צמיחה מהספה - ');
    $subject = $subject_prefix . $full_name;
    
    $email_body = "
    <html>
    <head>
        <title>פנייה חדשה מהאתר</title>
        <meta charset='UTF-8'>
    </head>
    <body dir='rtl'>
        <h2>פנייה חדשה מהאתר צמיחה מהספה</h2>
        <p><strong>שם מלא:</strong> $full_name</p>
        <p><strong>טלפון:</strong> $phone_number</p>
        <p><strong>דוא\"ל:</strong> $email</p>
        <p><strong>פירוט:</strong></p>
        <p>$description</p>
        <hr>
        <p><small>הפנייה התקבלה ב: " . date('d/m/Y H:i:s') . "</small></p>
    </body>
    </html>
    ";
    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: " . getEnvVar('FROM_EMAIL', 'tzmicha-mehasapa@website.com') . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    
    // Send email using PHP mail() function
    $email_sent = mail($to, $subject, $email_body, $headers);
    
    if ($email_sent) {
        $message = $db_configured ? 'Form submitted, set user data on Database and email sent successfully' : 'Form submitted and email sent successfully';
        echo json_encode(['success' => true, 'message' => $message]);
    } else {
        $message = $db_configured ? 'Form submitted, but update user in Database and email sending failed' : 'Email sending failed';
        echo json_encode(['success' => $db_configured, 'message' => $message]);
    }
    
} catch (PDOException $e) {
    http_response_code(500);
    // Only show detailed error message in development
    $error_message = getEnvVar('APP_ENV') === 'development' ? $e->getMessage() : 'Database connection failed';
    echo json_encode(['error' => 'Database error: ' . $error_message]);
} catch (Exception $e) {
    http_response_code(500);
    // Only show detailed error message in development
    $error_message = getEnvVar('APP_ENV') === 'development' ? $e->getMessage() : 'Server error occurred';
    echo json_encode(['error' => 'Server error: ' . $error_message]);
}
?>
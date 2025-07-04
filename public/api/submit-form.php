
<?php
require_once __DIR__ . '/vendor/autoload.php';

use Dotenv\Dotenv;

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

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

// Load environment variables
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

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
$full_name = htmlspecialchars(trim($input['full_name']), ENT_QUOTES, 'UTF-8');
$phone_number = htmlspecialchars(trim($input['phone_number']), ENT_QUOTES, 'UTF-8');
$email = filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL);
$description = htmlspecialchars(trim($input['description']), ENT_QUOTES, 'UTF-8');

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}

try {
    // Database connection
    $dsn = "mysql:host={$_ENV['DB_HOST']};dbname={$_ENV['DB_NAME']};charset=utf8mb4";
    $pdo = new PDO($dsn, $_ENV['DB_USER'], $_ENV['DB_PASS']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Insert into database
    $stmt = $pdo->prepare("INSERT INTO leads (full_name, phone_number, email, description, created_at) VALUES (?, ?, ?, ?, NOW())");
    $stmt->execute([$full_name, $phone_number, $email, $description]);
    
    // Send email notification
    $to = $_ENV['EMAIL_TO'];
    $subject = 'פנייה חדשה מהאתר - ' . $full_name;
    
    $email_body = "
    <html>
    <head>
        <title>פנייה חדשה מהאתר</title>
        <meta charset='UTF-8'>
    </head>
    <body dir='rtl'>
        <h2>פנייה חדשה מהאתר</h2>
        <p><strong>שם מלא:</strong> $full_name</p>
        <p><strong>טלפון:</strong> $phone_number</p>
        <p><strong>דוא\"ל:</strong> $email</p>
        <p><strong>תיאור המצב:</strong></p>
        <p>$description</p>
        <hr>
        <p><small>הפנייה התקבלה ב: " . date('d/m/Y H:i:s') . "</small></p>
    </body>
    </html>
    ";
    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: {$_ENV['EMAIL_FROM']}\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    
    // Send email using PHP mail() function
    $email_sent = mail($to, $subject, $email_body, $headers);
    
    if ($email_sent) {
        echo json_encode(['success' => true, 'message' => 'Form submitted and email sent successfully']);
    } else {
        echo json_encode(['success' => true, 'message' => 'Form submitted successfully, but email sending failed']);
    }
    
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Server error: ' . $e->getMessage()]);
}
?>

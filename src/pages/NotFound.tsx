
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-green-50 to-teal-100 flex items-center justify-center px-4" dir="rtl">
      <div className="text-center max-w-2xl mx-auto animate-fade-in">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-scale-in">
          <img
            src="/assets/web-logo.png"
            alt="צמיחה מהספה"
            className="w-24 h-24 object-contain hover-scale"
          />
        </div>

        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-emerald-100 p-6 rounded-full animate-pulse">
            <AlertTriangle className="w-16 h-16 text-emerald-600" />
          </div>
        </div>

        {/* Error Text */}
        <h1 className="text-6xl font-bold text-emerald-900 mb-4 animate-fade-in">
          404
        </h1>
        <h2 className="text-3xl font-bold text-green-800 mb-4 animate-fade-in">
          אופס! הדף לא נמצא
        </h2>
        <p className="text-xl text-emerald-700 mb-8 leading-relaxed animate-fade-in">
          נראה שהדף שחיפשתם אינו קיים או שהכתובת שונתה.
          <br />
          אל תדאגו - אנחנו כאן לעזור לכם למצוא את מה שאתם מחפשים!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover-scale"
            onClick={() => window.location.href = "/"}
          >
            <Home className="w-5 h-5 ml-2" />
            חזרה לעמוד הבית
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover-scale"
            onClick={() => window.history.back()}
          >
            חזור לדף הקודם
          </Button>
        </div>

        {/* Help Text */}
        <div className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-emerald-200 animate-fade-in">
          <h3 className="text-xl font-bold text-emerald-900 mb-2">
            זקוקים לעזרה?
          </h3>
          <p className="text-green-700 mb-4">
            צרו איתנו קשר לקבלת ייעוץ פיננסי מקצועי
          </p>
          <div className="flex items-center justify-center gap-4 text-emerald-600">
            <span>📞 054-430-8998</span>
            <span>✉️ liran@tzmicha-mehsapa.co.il</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

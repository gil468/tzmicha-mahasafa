
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-emerald-50 via-green-50 to-teal-100 flex items-center justify-center px-4"
      dir="rtl"
    >
      <div className="text-center max-w-2xl mx-auto animate-fade-in">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-scale-in">
          <img
            src="/assets/web-logo.png"
            alt="צמיחה מהספה"
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain hover-scale"
            loading="eager"
          />
        </div>

        {/* 404 Icon */}
        <div className="mb-8 animate-float">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-emerald-100 rounded-full shadow-lg">
            <Search className="w-16 h-16 text-emerald-600" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-6xl sm:text-8xl font-bold text-emerald-900 mb-4 animate-scale-in">
          404
        </h1>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 animate-fade-in">
          הדף שחיפשתם לא נמצא
        </h2>

        <p className="text-lg sm:text-xl text-green-700 mb-8 leading-relaxed animate-fade-in">
          נראה שהדף שאתם מחפשים אינו קיים או שהוא הועבר למקום אחר.
          <br />
          בואו נחזור לעמוד הראשי ונמשיך את המסע שלכם לעצמאות פיננסית.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Link to="/">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover-scale flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              חזרה לעמוד הראשי
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-12 p-6 bg-white/80 rounded-2xl border border-emerald-200 backdrop-blur-sm animate-fade-in">
          <h3 className="text-xl font-bold text-emerald-900 mb-4">
            זקוקים לעזרה?
          </h3>
          <p className="text-green-700 mb-4">
            אם הגעתם לכאן בטעות או שאתם מחפשים משהו ספציפי, אנחנו כאן לעזור!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent("שלום, אני זקוק לעזרה באתר")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors"
            >
              <img
                src="/assets/whatsapp-icon.png"
                alt="WhatsApp"
                className="w-5 h-5"
              />
              צרו קשר בוואטסאפ
            </a>
            <span className="text-emerald-300 hidden sm:inline">|</span>
            <a
              href={`mailto:${import.meta.env.VITE_FOOTER_EMAIL}`}
              className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors"
            >
              📧 שלחו אימייל
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

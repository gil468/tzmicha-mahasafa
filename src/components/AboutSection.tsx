import { Award, Shield, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-900 mb-4 sm:mb-6 px-4">
            מי אני ומה אני מציע
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center animate-fade-in">
          <div className="px-4">
            <h3 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-4">
              לירן אהרון - יועץ פיננסי מוסמך
            </h3>
            <p className="text-green-700 text-base sm:text-lg leading-relaxed mb-6">
              יועץ פיננסי בעל תעודת הסמכה מקצועית, עם ניסיון של מעל 5 שנים בתחום
              הייעוץ הפיננסי.
              <br />
              מתמחה בכלכלת המשפחה וניהול תקציב אישי.
              <br />
              מסייע למשפחות לצמוח כלכלית ולבנות עתיד טוב יותר.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <span className="text-green-700 text-sm sm:text-base">
                  יועץ פיננסי מוסמך עם תעודה מקצועית
                </span>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <span className="text-green-700 text-sm sm:text-base">
                  מומחה לתכנון פיננסי ארוך טווח
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <span className="text-green-700 text-sm sm:text-base">
                  מתמחה בניהול סיכונים וכלכלת המשפחה
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 px-4">
            <img
              src="/assets/profile.png"
              alt="לירן אהרון - יועץ פיננסי"
              className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-2xl shadow-lg hover-scale"
              loading="lazy"
            />

            <div className="bg-gradient-to-br from-emerald-50 to-green-100 p-6 sm:p-8 rounded-2xl border border-emerald-200">
              <h3 className="text-xl sm:text-2xl font-bold text-emerald-800 mb-4 sm:mb-5">
                האני מאמין שלי
              </h3>
              <p className="text-green-700 text-base sm:text-lg leading-relaxed">
                אני מאמין שכל משפחה יכולה להשיג צמיחה ויציבות כלכלית עם התוכנית
                הנכונה.
                <br />
                הגישה שלי מבוססת על הבנת הצרכים הייחודיים של כל משפחה ובניית
                תוכנית מעשית ומותאמת אישית.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { ChartNoAxesCombined, ChartPie, Check } from "lucide-react";

const mainTextColor = import.meta.env.VITE_MAIN_TEXT_COLOR;

const AboutSection = () => {
  return (
    <section className="py-2 sm:py-1 px-4 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-${mainTextColor} mb-4 sm:mb-6 px-4`}
          >
            קצת עליי
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center animate-fade-in">
          <div className="px-4">
            <h3
              className={`text-xl sm:text-2xl font-bold text-${mainTextColor} mb-4`}
            >
              אני לירן אהרון - אבא, בעל, חובב גדול של טניס שולחן ומעריך ספורט,
              ולא פחות - מאמן להתפתחות כלכלית
            </h3>
            <p
              className={`text-${mainTextColor} text-base sm:text-xl leading-relaxed mb-6`}
            >
              התשוקה שלי להתפתחות כלכלית הייתה מאז שאני חייל, אבל בתכלס הכל
              התחיל לבעור לפני 5 שנים כאשר הוצאתי משפחה מחוב של 2.5 מיליון ש״ח
              בהוצאה לפועל למצב יציב, כולל רכישת הדירה שלהם, והיום הם אפילו
              חוסכים.
              <br />
              מאז ובאופן טבעי לגמרי הצלחתי לעבוד עם אנשים ולשפר את עתידם הכלכלי
              וגם את שלי.
              <br />
              למה אני מספר לכם את זה?
              <br />
              כי אם הם הצליחו אז משפחה ממוצעת יכולה להמריא!
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 px-1">
            <img
              src="/assets/profile.png"
              alt="לירן אהרון - מאמן כלכלי"
              className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-2xl shadow-lg hover-scale"
              loading="lazy"
            />

            <div className="bg-white/90 p-6 sm:p-8 rounded-2xl border border-slate-300">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-600 mb-4 sm:mb-5">
                תוכנית ליווי כלכלית שמתאימה בדיוק למשפחות וצעירים שרוצים:
              </h3>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-amber-600 text-sm sm:text-base">
                  לעשות סדר בתזרים של הבית (מתאים גם לעצמאיים)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <ChartPie className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-amber-600 text-sm sm:text-base">
                  להתחיל לחסוך בלי לכבות את האור בבית
                </span>
              </div>
              <div className="flex items-start gap-3">
                <ChartNoAxesCombined className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-amber-600 text-sm sm:text-base">
                  לבנות תוכנית כלכלית פשוטה, שתעבוד בשבילכם - לא נגדכם
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

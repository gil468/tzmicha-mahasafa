const AboutSection = () => {
  return (
    <section className="px-4 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl animate-fade-in">
        <div className="flex justify-center mb-6">
          <img
            src="/assets/profile.png"
            alt="לירן אהרון - מאמן כלכלי"
            className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-2xl shadow-lg hover-scale"
            loading="lazy"
          />
        </div>

        <div className="gap-8 items-center">
          <div className="px-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4 ">
              אני לירן אהרון - אבא, בעל, חובב גדול של טניס שולחן ומעריך ספורט,
              ולא פחות - מאמן להתפתחות כלכלית
            </h3>
            <p className="text-gray-700 text-base sm:text-xl leading-relaxed mb-6">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

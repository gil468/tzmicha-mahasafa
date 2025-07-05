const ProblemSolutionSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-emerald-50/50">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center animate-fade-in">
          <div className="px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-6">
              מכירים את התחושה?
            </h2>
            <ul className="space-y-4 text-green-700 text-base sm:text-lg">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <span>לא מצליחים לסגור את החודש?</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <span>לא יודעים לאן הכסף נעלם?</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <span>חולמים על חיסכון אבל זה נראה בלתי אפשרי?</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 sm:p-8 rounded-2xl border border-green-300 animate-scale-in mx-4">
            <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-4">
              הפתרון כאן!
            </h3>
            <p className="text-green-700 text-base sm:text-lg leading-relaxed">
              עם ייעוץ מקצועי ותוכנית פעולה מותאמת אישית, תלמדו לנהל את הכסף
              בחכמה, תצאו מהמינוס ותתחילו לחסוך למטרות שחשובות לכם באמת.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;

const mainTextColor = import.meta.env.VITE_MAIN_TEXT_COLOR;
const problems = [
  `משפחות שמרגישות שהן תמיד סביב ה-״פלוס מינוס״, למרות שהשכר טוב הלחץ קיים`,
  `צעירים בתחילת הדרך שרוצים להתחיל נכון - צעירים ומרוויחים טוב? זה הזמן שלכם`,
  `כל מי שמבין שהגיע הזמן לקחת את המושכות לידיים ולייצר רווחה כלכלית, עכשיו ובעתיד`,
];

const ProblemSolutionSection = () => {
  return (
    <section className={"py-4 sm:py-6 px-4"}>
      <div className="container mx-auto max-w-8xl flex justify-center">
        <div className="grid md:grid-cols-1 gap-8 sm:gap-12 items-center animate-fade-in">
          <div className="px-4">
            <h2
              className={`text-2xl sm:text-3xl font-bold text-${mainTextColor} mb-6`}
            >
              למי זה מתאים?
            </h2>
            <ul className="space-y-4 text-gray-900 text-base sm:text-lg">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg sm:text-xl">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;

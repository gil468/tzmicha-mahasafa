import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onConsultButtonClick: () => void;
}
const mainTextColor = import.meta.env.VITE_MAIN_TEXT_COLOR;

const HeroSection = ({ onConsultButtonClick }: HeroSectionProps) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 animate-float bg-gradient-to-b from-amber-50">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="flex justify-center mb-6 sm:mb-8 animate-scale-in">
          <img
            src="/assets/web-logo.png"
            alt="צמיחה מהספה"
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain hover-scale"
            loading="eager"
          />
        </div>

        <h1
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-${mainTextColor} mb-3 sm:mb-4 leading-tight px-4`}
        >
          צמיחה מהספה
        </h1>

        <p
          className={`text-${mainTextColor} text-base sm:text-xl leading-relaxed mb-6`}
        >
          אתם מרוויחים טוב אבל עדיין הכסף נעלם?
          <br />
          לא מצליחים להגיע למטרות שלכם?
          <br />
          הילדים גדלים, הזמן רץ - הקמתם משפחה ואולי גם עסק קטן?
          <br />
          אז למה לא לקחת את המושכות לידיים ולבנות מציאות כלכלית רגועה ומאפשרת!
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-600 mb-4 sm:mb-6 leading-tight px-4">
          5 מפגשים שיסדרו לכם את הכסף - בלי בלגן ועם תוצאות
        </h2>

        <Button
          size="lg"
          className="bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover-scale"
          onClick={onConsultButtonClick}
        >
          לקבלת ייעוץ מקצועי
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

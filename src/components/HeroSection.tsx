import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onConsultButtonClick: () => void;
}

const HeroSection = ({ onConsultButtonClick }: HeroSectionProps) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 animate-fade-in">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="flex justify-center mb-6 sm:mb-8 animate-scale-in">
          <img
            src="/assets/web-logo.png"
            alt="צמיחה מהספה"
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain hover-scale"
            loading="eager"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-900 mb-3 sm:mb-4 leading-tight px-4">
          לירן אהרון - יועץ פיננסי לכלכלת המשפחה
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mb-4 sm:mb-6 leading-tight px-4">
          רוצים לצאת מהמינוס <span className="text-teal-700">אחת ולתמיד?</span>
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-emerald-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          צאו למסע של <span className="text-amber-500/90">צמיחה כלכלית</span>
        </p>

        <Button
          size="lg"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover-scale"
          onClick={onConsultButtonClick}
        >
          לקבלת ייעוץ מקצועי
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const recommendations = [
  {
    text: "לא האמנתי כמה קל להתחיל לשנות הרגלים כלכליים. זה לא כאב - זה לשחרר",
  },
  {
    text: "הפסקנו לריב על כסף. יש לנו שפה משותפת וביטחון בעתיד",
  },
];
const mainTextColor = import.meta.env.VITE_MAIN_TEXT_COLOR;

const RecommendationsSection = () => {
  return (
    <section className="py-8 sm:py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-${mainTextColor} text-center mb-8 sm:mb-12 px-4`}
        >
          מה הלקוחות שלנו אומרים
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {recommendations.map((recommendation, index) => (
            <Card
              key={index}
              className="p-4 md:p-6 hover:shadow-lg transition-all hover-scale bg-white/90 border-amber-300 animate-fade-in h-full"
            >
              <CardContent className="p-0 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-green-700 mb-4 leading-relaxed text-base md:text-lg flex-grow">
                  "{recommendation.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;

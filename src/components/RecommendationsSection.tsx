import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const recommendations = [
  {
    name: "שרה כהן",
    text: "תוך 3 חודשים הצלחנו לחסוך 2,000 ש״ח בחודש ולצאת מהמינוס. הייעוץ שינה לנו את החיים!",
  },
  {
    name: "דוד לוי",
    text: "סוף סוף יש לנו שליטה על התקציב. בעזרת הייעוץ המקצועי, ממליץ בחום!",
  },
];

const RecommendationsSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-900 text-center mb-8 sm:mb-12 px-4">
          מה הלקוחות שלנו אומרים
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {recommendations.map((recommendation, index) => (
            <Card
              key={index}
              className="p-4 md:p-6 hover:shadow-lg transition-all hover-scale bg-gradient-to-br from-emerald-50 to-green-100 border-emerald-200 animate-fade-in h-full"
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
                <p className="text-green-700 mb-4 leading-relaxed text-sm md:text-base flex-grow">
                  "{recommendation.text}"
                </p>
                <p className="font-semibold text-emerald-800 text-sm md:text-base">
                  - {recommendation.name}
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

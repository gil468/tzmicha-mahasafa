import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

interface VideoSectionProps {
  onGuidanceVideoButtonClick: () => void;
}

const benefits = [
  "מיפוי מדויק של המצב הכלכלי שלכם",
  "בניית תקציב אמיתי שמתאים לאורח החיים שלכם",
  "כלים פשוטים לניהול חכם של הכסף",
  "שיטות לצמיחה כלכלית - גם עם משכורת ממוצעת",
  "תכנון לעתיד בריא - בלי לוותר על ההווה",
  "כל זה מהבית שלכם - בלי נסיעות, בלי כאב ראש",
];

const BenefitsSection = ({
  onGuidanceVideoButtonClick: onGuidanceVideoButtonClick,
}: VideoSectionProps) => {
  return (
    <section className="py-4 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 mb-3 sm:mb-4 px-4">
          אז איך זה עובד?
        </h2>
        <p className="text-lg sm:text-2xl text-gray-700 mb-8 sm:mb-12 px-4">
          ב-5 מפגשים פרקטיים, נעבוד יחד על:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-4 sm:p-6 hover:shadow-lg transition-all hover-scale bg-white/90 border border-slate-300 animate-fade-in"
            >
              <CardContent className="p-0">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <span className="text-amber-600 text-right text-sm sm:text-base">
                    {benefit}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center py-6 sm:py-8 animate-fade-in p-4">
          <p className="text-xl sm:text-3xl text-orange-700 max-w-xl mx-auto">
            ועכשיו אם הגעתם עד לכאן קבלו ישירות אליכם הדרכה חינמית קצרה שמדברת
            על פנסיה, קרן השתלמות ומה שביניהם 👇🏻
          </p>
          <br />
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition  hover:scale-105"
            onClick={onGuidanceVideoButtonClick}
          >
            להדרכה החינמית
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

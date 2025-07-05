import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const benefits = [
  "ייעוץ אישי מותאם למצב המשפחתי שלכם",
  "תוכנית תקציב מפורטת וברורה",
  "כלים פרקטיים לחיסכון חודשי",
  "הדרכה לניהול חובות ויציאה מהמינוס",
  "מעקב והכוונה רציפה עד להשגת היעדים",
  "ליווי אישי לאורך כל הדרך",
];

const BenefitsSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-green-50 to-emerald-100">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-900 mb-3 sm:mb-4 px-4">
          מה תקבלו בייעוץ?
        </h2>
        <p className="text-lg sm:text-xl text-green-700 mb-8 sm:mb-12 px-4">
          כל מה שאתם צריכים כדי להשיג צמיחה ויציבות כלכלית מלאה
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-4 sm:p-6 hover:shadow-lg transition-all hover-scale bg-white/90 border-emerald-200 animate-fade-in"
            >
              <CardContent className="p-0">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-green-700 text-right text-sm sm:text-base">
                    {benefit}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

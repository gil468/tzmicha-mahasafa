
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { LeadForm } from "@/models/LeadForm";
import { validateFormData } from "@/services/formValidation";
import VideoSection from "@/components/VideoSection";
import {
  Award,
  CheckCircle,
  CheckIcon,
  Mail,
  Phone,
  Shield,
  Star,
  TrendingUp,
  XIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const defaultFormData = new LeadForm();
  const { toast } = useToast();
  const [formData, setFormData] = useState(defaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappOpacity, setWhatsappOpacity] = useState(1);
  const [formErrors, setFormErrors] = useState(defaultFormData);
  const footerPhoneNumber = import.meta.env.VITE_FOOTER_PHONE_NUMBER;
  const footerEmail = import.meta.env.VITE_FOOTER_EMAIL;
  const facebookPageName = import.meta.env.VITE_FACEBOOK_PAGE_NAME;
  const instagramPageName = import.meta.env.VITE_INSTAGRAM_PAGE_NAME;
  const tiktokPageName = import.meta.env.VITE_TIKTOK_PAGE_NAME;

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const isNearFooter =
          footerRect.top < window.innerHeight && footerRect.top > 0;
        setWhatsappOpacity(isNearFooter ? 0.3 : 1);
      }
    };

    // Add passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numeric characters
    const value = e.target.value.replace(/[^\d]/g, "");
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { errors, isValid } = validateFormData(formData);
    setFormErrors(errors);
    if (!isValid) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-form.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: formData.name,
          phone_number: formData.phone,
          email: formData.email,
          description: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "תודה על הפנייה!",
          description: (
            <div className="flex items-center gap-2 text-right">
              <CheckIcon className="w-5 h-5 text-green-600" />
              <span>ניצור איתך קשר בקרוב לתיאום פגישת הייעוץ</span>
            </div>
          ),
          className: "bg-green-50 border-green-200 text-green-800 text-right",
          duration: 5000,
        });
        setFormData(defaultFormData);
        setFormErrors(defaultFormData);
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      toast({
        title: "שגיאה בשליחת הטופס",
        description: (
          <div className="flex items-center gap-2 text-right">
            <XIcon className="w-5 h-5 text-red-200" />
            <span>אירעה שגיאה בשליחת הטופס. אנא נסו שוב מאוחר יותר.</span>
          </div>
        ),
        variant: "destructive",
        className: "text-right",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE_NUMBER;
    const message = "שלום, אני מעוניין לקבל ייעוץ פיננסי מקצועי";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const benefits = [
    "ייעוץ אישי מותאם למצב המשפחתי שלכם",
    "תוכנית תקציב מפורטת וברורה",
    "כלים פרקטיים לחיסכון חודשי",
    "הדרכה לניהול חובות ויציאה מהמינוס",
    "מעקב והכוונה רציפה עד להשגת היעדים",
    "ליווי אישי לאורך כל הדרך",
  ];

  const recommendations = [
    {
      name: "שרה כהן",
      text: "תוך 3 חודשים הצלחנו לחסוך 2,000 ש״ח בחודש ולצאת מהמינוס. הייעוץ שינה לנו את החיים!",
    },
    {
      name: "דוד לוי",
      text: "סוף סוף יש לנו שליטה על התקציב. בעזרת הייעוץ המקצועי והאישי של לירן, ממליץ בחום!",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-emerald-50 via-green-50 to-teal-100"
      dir="rtl"
    >
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 animate-fade-in">
        <div className="container mx-auto max-w-6xl text-center">
          {/* Logo */}
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
            רוצים לצאת מהמינוס&nbsp;
            <span className="text-teal-700">אחת ולתמיד?</span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-emerald-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            צאו למסע של&nbsp;
            <span className="text-amber-500/90">צמיחה כלכלית</span>
          </p>

          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover-scale"
            onClick={() =>
              document
                .getElementById("leads-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            לקבלת ייעוץ מקצועי
          </Button>
        </div>
      </section>

      {/* About the Advisor Section */}
      <section className="py-12 sm:py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-900 mb-4 sm:mb-6 px-4">
              מי אני ומה אני מציע
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center animate-fade-in">
            <div className="px-4">
              <h3 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-4">
                לירן אהרון - יועץ פיננסי מוסמך
              </h3>
              <p className="text-green-700 text-base sm:text-lg leading-relaxed mb-6">
                יועץ פיננסי בעל תעודת הסמכה מקצועית, עם ניסיון של מעל 5 שנים
                בתחום הייעוץ הפיננסי.
                <br />
                מתמחה בכלכלת המשפחה וניהול תקציב אישי.
                <br />
                מסייע למשפחות לצמוח כלכלית ולבנות עתיד טוב יותר.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-green-700 text-sm sm:text-base">
                    יועץ פיננסי מוסמך עם תעודה מקצועית
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-green-700 text-sm sm:text-base">
                    מומחית לתכנון פיננסי ארוך טווח
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-green-700 text-sm sm:text-base">
                    מתמחה בניהול סיכונים וכלכלת המשפחה
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 px-4">
              <img
                src="/assets/profile.png"
                alt="לירן אהרון - יועץ פיננסי"
                className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-2xl shadow-lg hover-scale"
                loading="lazy"
              />

              <div className="bg-gradient-to-br from-emerald-50 to-green-100 p-6 sm:p-8 rounded-2xl border border-emerald-200">
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-800 mb-4 sm:mb-5">
                  האני מאמין שלי
                </h3>
                <p className="text-green-700 text-base sm:text-lg leading-relaxed">
                  אני מאמין שכל משפחה יכולה להשיג צמיחה ויציבות כלכלית עם
                  התוכנית הנכונה.
                  <br />
                  הגישה שלי מבוססת על הבנת הצרכים הייחודיים של כל משפחה ובניית
                  תוכנית מעשית ומותאמת אישית.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
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

      {/* Benefits Section */}
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
                    <span className="text-green-700 text-right text-sm sm:text-base">{benefit}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Recommendations Section */}
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

      {/* Leads Form Section */}
      <section
        id="leads-form"
        className="py-16 sm:py-20 px-4 bg-gradient-to-b from-emerald-50 to-green-100"
      >
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-900 mb-3 sm:mb-4 px-4">
              לקביעת פגישת ייעוץ מקצועית
            </h2>
            <p className="text-lg sm:text-xl text-green-700 px-4">
              השאירו פרטים ונחזור אליכם בהקדם
            </p>
          </div>

          <Card className="p-6 sm:p-8 shadow-xl bg-white/95 border-2 border-emerald-200 animate-scale-in mx-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-emerald-800 font-semibold mb-2 text-sm sm:text-base">
                  שם מלא *
                </label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`text-right border-emerald-200 focus:border-emerald-400 ${
                    formErrors.name ? "border-red-500" : ""
                  }`}
                  placeholder="שמכם המלא"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1 text-right">
                    {formErrors.name}
                  </p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-emerald-800 font-semibold mb-2 text-sm sm:text-base">
                    טלפון *
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`text-right border-emerald-200 focus:border-emerald-400 ${
                      formErrors.phone ? "border-red-500" : ""
                    }`}
                    placeholder="0501234567"
                    maxLength={10}
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm mt-1 text-right">
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-emerald-800 font-semibold mb-2 text-sm sm:text-base">
                    דוא״ל *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={`text-right border-emerald-200 focus:border-emerald-400 ${
                      formErrors.email ? "border-red-500" : ""
                    }`}
                    placeholder="example@email.com"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1 text-right">
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-emerald-800 font-semibold mb-2 text-sm sm:text-base">
                  ספרו לנו על המצב שלכם *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`text-right border-emerald-200 focus:border-emerald-400 min-h-[100px] ${
                    formErrors.message ? "border-red-500" : ""
                  }`}
                  placeholder="למשל: חובות, קשיים בחיסכון, בעיות תקציב..."
                />
                {formErrors.message && (
                  <p className="text-red-500 text-sm mt-1 text-right">
                    {formErrors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover-scale"
              >
                {isSubmitting ? "שולח..." : "שליחת פנייה"}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
        style={{ opacity: whatsappOpacity }}
        aria-label="צור קשר בוואטסאפ"
      >
        <img
          src="/assets/whatsapp-icon.png"
          alt="WhatsApp"
          className="w-5 h-5 sm:w-6 sm:h-6 filter brightness-0 invert"
          loading="lazy"
        />
      </button>

      {/* Footer */}
      <footer id="footer" className="bg-emerald-900 text-white py-8 sm:py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">צמיחה מהספה - לירן אהרון</h3>
          <p className="text-emerald-200 mb-6 text-sm sm:text-base">
            מסייע למשפחות לצמוח כלכלית ולבנות עתיד פיננסי
          </p>

          <div className="flex items-center justify-center gap-4 sm:gap-8 text-emerald-200 mb-6 sm:mb-8 flex-wrap">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">{footerPhoneNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">{footerEmail}</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <a
              href={`https://facebook.com/${facebookPageName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all hover-scale shadow-lg"
              aria-label="Facebook"
            >
              <img
                src="/assets/facebook-icon.png"
                alt="Facebook"
                className="w-5 h-5 sm:w-6 sm:h-6 filter brightness-0 invert"
                loading="lazy"
              />
            </a>
            <a
              href={`https://instagram.com/${instagramPageName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center transition-all hover-scale shadow-lg"
              aria-label="Instagram"
            >
              <img
                src="/assets/instagram-icon.png"
                alt="Instagram"
                className="w-5 h-5 sm:w-6 sm:h-6 filter brightness-0 invert"
                loading="lazy"
              />
            </a>
            <a
              href={`https://tiktok.com/@${tiktokPageName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-all hover-scale shadow-lg"
              aria-label="TikTok"
            >
              <img
                src="/assets/tiktok-icon.png"
                alt="TikTok"
                className="w-5 h-5 sm:w-6 sm:h-6 filter brightness-0 invert"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

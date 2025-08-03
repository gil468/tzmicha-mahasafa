import VideoSection from "@/components/VideoSection";
import { LeadForm } from "@/models/LeadForm";

import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import LeadsFormSection from "@/components/LeadsFormSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import RecommendationsSection from "@/components/RecommendationsSection";
import { useEffect, useState } from "react";

const Index = () => {
  const defaultFormData = new LeadForm();
  const [whatsappOpacity, setWhatsappOpacity] = useState(1);
  const guidanceVideoUrl = import.meta.env.VITE_GUIDANCE_VIDEO_URL;

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleConsultButtonClick = () => {
    document
      .getElementById("leads-form-header")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleGuidanceVideoButtonClick = () => {
    window.open(
      `https://www.youtube.com/${guidanceVideoUrl}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-amber-50 to-orange-200`}
      dir="rtl"
    >
      <HeroSection onConsultButtonClick={handleConsultButtonClick} />
      <AboutSection />
      <VideoSection />
      <BenefitsSection
        onGuidanceVideoButtonClick={handleGuidanceVideoButtonClick}
      />
      <ProblemSolutionSection />
      <RecommendationsSection />
      <LeadsFormSection defaultFormData={defaultFormData} />
      <FloatingWhatsAppButton whatsappOpacity={whatsappOpacity} />
      <FooterSection />
    </div>
  );
};

export default Index;

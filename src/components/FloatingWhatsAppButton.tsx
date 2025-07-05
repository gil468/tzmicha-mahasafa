interface FloatingWhatsAppButtonProps {
  whatsappOpacity: number;
}

const FloatingWhatsAppButton = ({
  whatsappOpacity,
}: FloatingWhatsAppButtonProps) => {
  const openWhatsApp = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE_NUMBER;
    const message = "שלום, אני מעוניין לקבל ייעוץ פיננסי מקצועי";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
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
  );
};

export default FloatingWhatsAppButton;

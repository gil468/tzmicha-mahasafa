import { Mail, Phone } from "lucide-react";

const FooterSection = () => {
  const footerPhoneNumber = import.meta.env.VITE_FOOTER_PHONE_NUMBER;
  const footerEmail = import.meta.env.VITE_FOOTER_EMAIL;
  const facebookPageName = import.meta.env.VITE_FACEBOOK_PAGE_NAME;
  const instagramPageName = import.meta.env.VITE_INSTAGRAM_PAGE_NAME;
  const tiktokPageName = import.meta.env.VITE_TIKTOK_PAGE_NAME;

  return (
    <footer
      id="footer"
      className="bg-emerald-900 text-white py-8 sm:py-12 px-4"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-4">
          צמיחה מהספה - לירן אהרון
        </h3>
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
            href={`https://tiktok.com/${tiktokPageName}`}
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
  );
};

export default FooterSection;

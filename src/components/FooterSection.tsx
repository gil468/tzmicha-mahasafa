import { Mail } from "lucide-react";
import SocialMediaIcon from "./SocialMediaIcon";

const FooterSection = () => {
  const footerEmail = import.meta.env.VITE_FOOTER_EMAIL;
  const facebookPageName = import.meta.env.VITE_FACEBOOK_PAGE_NAME;
  const instagramPageName = import.meta.env.VITE_INSTAGRAM_PAGE_NAME;
  const tiktokPageName = import.meta.env.VITE_TIKTOK_PAGE_NAME;
  const socialMediaLinks = [
    {
      platform: "Facebook",
      url: `https://facebook.com/${facebookPageName}`,
      icon: "/assets/facebook-icon.png",
      bgColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      platform: "Instagram",
      url: `https://instagram.com/${instagramPageName}`,
      icon: "/assets/instagram-icon.png",
      bgColor:
        "bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
    },
    {
      platform: "TikTok",
      url: `https://tiktok.com/${tiktokPageName}`,
      icon: "/assets/tiktok-icon.png",
      bgColor: "bg-black hover:bg-gray-800",
    },
  ];

  return (
    <footer id="footer" className="bg-amber-600 text-white py-6 sm:py-8 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
          {socialMediaLinks.map((link) => (
            <SocialMediaIcon
              key={link.platform}
              platform={link.platform}
              url={link.url}
              icon={link.icon}
              bgColor={link.bgColor}
            />
          ))}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-4">
          צמיחה מהספה - לירן אהרון
        </h3>
        <p className="text-white mb-6 text-sm sm:text-base">
          תוכנית הליווי שתכניס שקט כלכלי הביתה
        </p>

        <div className="flex items-center justify-center gap-4 sm:gap-8 text-white mb-6 sm:mb-8 flex-wrap">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">{footerEmail}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

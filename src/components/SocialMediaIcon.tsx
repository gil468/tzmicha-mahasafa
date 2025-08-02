const SocialMediaIcon = ({ platform, url, icon, bgColor }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-10 h-10 sm:w-12 sm:h-12 ${bgColor} rounded-full flex items-center justify-center transition-all hover-scale shadow-lg`}
    aria-label={platform}
  >
    <img
      src={icon}
      alt={platform}
      className="w-5 h-5 sm:w-6 sm:h-6 filter brightness-0 invert"
      loading="lazy"
    />
  </a>
);

export default SocialMediaIcon;

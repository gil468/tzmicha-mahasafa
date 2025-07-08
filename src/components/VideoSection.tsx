const VideoSection = () => {
  const youtubeVideoUrl = import.meta.env.VITE_YOUTUBE_VIDEO_URL;
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white/80 to-emerald-50/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            צפו בסרטון ההדרכה שלנו
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            למדו איך להתחיל את המסע שלכם לצמיחה מהספה
          </p>
        </div>
        <div className="flex justify-center animate-scale-in">
          <div className="relative w-full max-w-4xl md:max-w-5xl lg:max-w-6xl aspect-video">
            <iframe
              src={`https://www.youtube.com/${youtubeVideoUrl}`}
              title="המדריך המלא לעצמאות פיננסית"
              className="w-full h-full absolute top-0 left-0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

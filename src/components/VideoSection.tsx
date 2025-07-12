const VideoSection = () => {
  const youtubeVideoUrl = import.meta.env.VITE_YOUTUBE_VIDEO_URL;
  const mainTextColor = import.meta.env.VITE_MAIN_TEXT_COLOR;

  return (
    <section className="py-8 sm:py-8 px-4 ">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2
            className={`text-3xl md:text-4xl font-bold text-${mainTextColor} mb-4`}
          >
            רוצים לגלות איך גם אתם יכולים לצמוח כלכלית - בלי לצאת מהספה?
          </h2>
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
        <div className="text-center py-12 sm:py-12 animate-fade-in p-4">
          <p className="text-2xl sm:text-4xl text-orange-700 max-w-2xl mx-auto">
            השאירו פרטים ונחזור אליכם עם כל המידע על התוכנית הקרובה 👇🏻
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;


import { Play } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
    setIsVideoLoaded(true);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white/80 to-emerald-50/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">
            צפו בסרטון ההדרכה שלנו
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            למדו איך להתחיל את המסע שלכם לעצמאות פיננסית בדקות ספורות
          </p>
        </div>

        <div className="flex justify-center animate-scale-in">
          <div className="relative">
            {/* Laptop Frame */}
            <div className="bg-gray-800 rounded-t-2xl p-6 pb-0 shadow-2xl max-w-4xl">
              {/* Laptop Screen Bezel */}
              <div className="bg-black rounded-lg p-4">
                {/* Video Container */}
                <div className="relative bg-emerald-900 rounded aspect-video overflow-hidden">
                  {!showVideo ? (
                    // Video Thumbnail with Play Button
                    <div className="relative w-full h-full bg-gradient-to-br from-emerald-600 to-green-700 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent"></div>
                      
                      {/* Play Button */}
                      <button
                        onClick={handlePlayClick}
                        className="relative z-10 bg-white/90 hover:bg-white text-emerald-600 rounded-full p-6 transition-all duration-300 hover:scale-110 shadow-lg group"
                        aria-label="נגן וידאו"
                      >
                        <Play className="w-12 h-12 ml-1" fill="currentColor" />
                      </button>

                      {/* Video Title Overlay */}
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">
                          המדריך המלא לעצמאות פיננסית
                        </h3>
                        <p className="text-emerald-100 text-sm md:text-base">
                          כל מה שצריך לדעת כדי להתחיל
                        </p>
                      </div>
                    </div>
                  ) : (
                    // YouTube Embed
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
                      title="המדריך המלא לעצמאות פיננסית"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      onLoad={() => setIsVideoLoaded(true)}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Laptop Base */}
            <div className="bg-gray-700 h-8 rounded-b-2xl shadow-lg relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
            </div>

            {/* Laptop Shadow */}
            <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/10 rounded-full blur-sm"></div>
          </div>
        </div>

        {/* Video Benefits */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/80 rounded-xl border border-emerald-200 animate-fade-in">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h4 className="font-bold text-emerald-900 mb-2">טיפים מעשיים</h4>
            <p className="text-green-700 text-sm">אסטרטגיות פשוטות ליישום מיידי</p>
          </div>

          <div className="text-center p-6 bg-white/80 rounded-xl border border-emerald-200 animate-fade-in">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h4 className="font-bold text-emerald-900 mb-2">תוצאות מוכחות</h4>
            <p className="text-green-700 text-sm">דוגמאות אמיתיות של הצלחה</p>
          </div>

          <div className="text-center p-6 bg-white/80 rounded-xl border border-emerald-200 animate-fade-in">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="font-bold text-emerald-900 mb-2">הדרכה צעד אחר צעד</h4>
            <p className="text-green-700 text-sm">מסלול ברור להשגת היעדים</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

import { ChartNoAxesCombined, ChartPie, Check } from "lucide-react";

const features = [
  {
    icon: Check,
    text: "לעשות סדר בתזרים של הבית (מתאים גם לעצמאיים)",
  },
  {
    icon: ChartPie,
    text: "להתחיל לחסוך בלי לכבות את האור בבית",
  },
  {
    icon: ChartNoAxesCombined,
    text: "לבנות תוכנית כלכלית פשוטה, שתעבוד בשבילכם - לא נגדכם",
  },
];
const recommendationsVideoUrl = import.meta.env.VITE_RECOMMENDATIONS_VIDEO_URL;

const VideoSection = () => {
  return (
    <section className="px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
            רוצים להבין איך גם אתם יכולים לצמוח כלכלית - בלי לצאת מהספה?
          </h2>
        </div>

        <div className="flex flex-col items-center gap-8 px-1 animate-scale-in">
          <div className="bg-white/90 p-6 sm:p-8 rounded-2xl border border-slate-300">
            <h3 className="text-xl sm:text-2xl font-bold text-amber-600 mb-5">
              תוכנית ליווי כלכלית שמתאימה בדיוק למשפחות וצעירים שרוצים:
            </h3>
            <div className="flex flex-col gap-4">
              {features.map(({ icon: Icon, text }, index) => (
                <div className="flex items-start gap-3" key={index}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <span className="text-amber-600 text-sm sm:text-base">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-[300px] sm:max-w-[360px] mx-auto aspect-[9/16]">
            <iframe
              id="youtube-player"
              src={`https://www.youtube.com/${recommendationsVideoUrl}`}
              title="סרטון המלצות של לקוחות"
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
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

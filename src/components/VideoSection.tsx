import { Button } from "./ui/button";

interface VideoSectionProps {
  onVimeoVideoButtonClick: () => void;
}

const VideoSection = ({ onVimeoVideoButtonClick }: VideoSectionProps) => {
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
          <div className="relative w-full max-w-[300px] sm:max-w-[360px] mx-auto aspect-[9/16]">
            <iframe
              id="youtube-player"
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
          <p className="text-xl sm:text-3xl text-orange-700 max-w-xl mx-auto">
            השאירו פרטים וקבלו ישירות אליכם הדרכה חינמית קצרה שמדברת על פנסיה,
            קרן השתלמות ומה שביניהם 👇🏻
          </p>
          <br />
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition  hover:scale-105"
            onClick={onVimeoVideoButtonClick}
          >
            להדרכה החינמית
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

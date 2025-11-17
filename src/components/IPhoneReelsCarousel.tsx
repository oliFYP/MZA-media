import { useState, useRef, useEffect } from "react";
import {
  Wifi,
  BatteryFull,
  Signal,
  ChevronUp,
  ChevronDown,
  Loader2,
} from "lucide-react";

const reels = [
  "DP8_X_QCqh0",
  "DPO63Pnijst",
  "DP2EVcliZXg",
  "DPe4rbZCBYI",
  "DOCPiz_lUVg",
];

const IPhoneReelsCarousel = () => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = reels.length;

  const handleLoad = () => setLoadedCount((prev) => prev + 1);
  const allLoaded = loadedCount >= total;

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * containerRef.current.clientHeight,
        behavior: "smooth",
      });
    }
  };

  const nextReel = () => {
    setCurrentIndex((prev) => {
      const newIndex = Math.min(prev + 1, reels.length - 1);
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  const prevReel = () => {
    setCurrentIndex((prev) => {
      const newIndex = Math.max(prev - 1, 0);
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-transparent px-4 py-12">
      <div
        className="relative bg-gradient-to-br from-gray-900 to-black rounded-[3.5rem] border-[8px] border-gray-800 
               shadow-[0_0_30px_10px_rgba(100,189,249,0.25),0_0_50px_15px_rgba(100,189,249,0.1)]
               w-[380px] h-[780px] max-w-[90vw] aspect-[380/780]
               overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_15px_rgba(100,189,249,0.3),0_0_60px_20px_rgba(100,189,249,0.15)]"
      >
        {/* Dynamic Island / Notch */}
        <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50 border border-gray-900 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-gray-800 rounded-full"></div>
        </div>

        {/* Top Status Bar */}
        <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/90 to-transparent z-40 py-3 px-6 flex justify-between items-center text-white text-sm pt-4">
          <span className="font-semibold">9:41</span>
          <div className="flex items-center space-x-2 opacity-90">
            <Signal size={15} strokeWidth={2.5} />
            <Wifi size={15} strokeWidth={2.5} />
            <BatteryFull size={17} strokeWidth={2.5} />
          </div>
        </div>

        {/* Side Buttons - More realistic */}
        <div className="absolute right-[-8px] top-[180px] w-[4px] h-[70px] bg-gradient-to-r from-gray-700 to-gray-600 rounded-full shadow-lg"></div>
        <div className="absolute left-[-8px] top-[140px] w-[4px] h-[50px] bg-gradient-to-l from-gray-700 to-gray-600 rounded-full shadow-lg"></div>
        <div className="absolute left-[-8px] top-[210px] w-[4px] h-[50px] bg-gradient-to-l from-gray-700 to-gray-600 rounded-full shadow-lg"></div>

        {/* Screen Content */}
        <div className="absolute inset-[8px] rounded-[3rem] overflow-hidden bg-black">
          {/* Reels Container */}
          <div
            ref={containerRef}
            className="relative w-full h-full overflow-hidden scroll-smooth snap-y snap-mandatory"
          >
            {!allLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-40 gap-4">
                <Loader2
                  className="animate-spin text-[rgb(100,189,249)]"
                  size={48}
                />
                <p className="text-white text-sm">Loading Reels...</p>
              </div>
            )}

            <div className="flex flex-col w-full h-full pt-[50px]">
              {reels.map((id, idx) => (
                <div
                  key={id}
                  className="w-full h-full flex-shrink-0 snap-start relative"
                >
                  <iframe
                    src={`https://www.instagram.com/reel/${id}/embed`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    allow="encrypted-media"
                    className="rounded-none"
                    onLoad={handleLoad}
                    title={`Instagram Reel ${idx + 1}`}
                  ></iframe>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Enhanced */}
          <button
            onClick={prevReel}
            disabled={currentIndex === 0}
            className={`absolute top-16 left-1/2 -translate-x-1/2 z-50 
              p-3 bg-[rgb(100,189,249)]/20 backdrop-blur-md rounded-full border-2 border-[rgb(100,189,249)]/30 
              hover:bg-[rgb(100,189,249)]/30 hover:scale-110 transition-all duration-300
              shadow-[0_0_10px_rgba(100,189,249,0.2)]
              ${
                currentIndex === 0
                  ? "opacity-0 cursor-not-allowed pointer-events-none"
                  : "opacity-100"
              }`}
          >
            <ChevronUp className="text-white" size={20} strokeWidth={3} />
          </button>

          <button
            onClick={nextReel}
            disabled={currentIndex === reels.length - 1}
            className={`absolute bottom-16 left-1/2 -translate-x-1/2 z-50 
              p-3 bg-[rgb(100,189,249)]/20 backdrop-blur-md rounded-full border-2 border-[rgb(100,189,249)]/30 
              hover:bg-[rgb(100,189,249)]/30 hover:scale-110 transition-all duration-300
              shadow-[0_0_10px_rgba(100,189,249,0.2)]
              ${
                currentIndex === reels.length - 1
                  ? "opacity-0 cursor-not-allowed pointer-events-none"
                  : "opacity-100"
              }`}
          >
            <ChevronDown className="text-white" size={20} strokeWidth={3} />
          </button>

          {/* Progress Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-1.5">
            {reels.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-[rgb(100,189,249)]"
                    : "w-1.5 bg-white/30"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhoneReelsCarousel;

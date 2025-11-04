import React, { useState, useRef, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Wifi, BatteryFull, Signal } from "lucide-react";

const reels = [
  "DP8_X_QCqh0",
  "DPO63Pnijst",
  "DP2EVcliZXg",
  "DPe4rbZCBYI",
  "DOCPiz_lUVg",
];

const IPhoneReelsCarousel: React.FC = () => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = reels.length;

  const handleLoad = () => setLoadedCount((prev) => prev + 1);
  const allLoaded = loadedCount >= total;

  const handleWheel = (e: WheelEvent) => {
    if (e.deltaY > 0)
      setCurrentIndex((prev) => Math.min(prev + 1, reels.length - 1));
    else if (e.deltaY < 0) setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel);
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: currentIndex * containerRef.current.clientHeight,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="flex justify-center items-center w-full h-screen bg-black px-4">
      <div
        className="relative bg-black rounded-[3rem] border-[6px] border-gray-700 
               shadow-[0_0_40px_10px_rgba(59,130,246,0.5)]
               w-[380px] h-[780px] max-w-[90vw] aspect-[380/780]
               overflow-hidden scale-90 sm:scale-100"
      >
        <div className="relative top-0 left-0 w-full bg-white z-50 py-2 px-6 flex justify-between items-center text-white text-sm">
          <span className="font-medium text-black">9:41</span>
          <div className="flex items-center text-black space-x-1 opacity-90">
            <Signal size={16} />
            <Wifi size={16} />
            <BatteryFull size={18} />
          </div>
        </div>

        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-50 border border-gray-800 shadow-inner"></div>

        <div className="absolute right-[-6px] top-[180px] w-[3px] h-[60px] bg-gray-700 rounded-full"></div>
        <div className="absolute left-[-6px] top-[150px] w-[3px] h-[40px] bg-gray-700 rounded-full"></div>
        <div className="absolute left-[-6px] top-[210px] w-[3px] h-[40px] bg-gray-700 rounded-full"></div>

        <div
          ref={containerRef}
          className="relative w-full h-full overflow-hidden scroll-smooth snap-y snap-mandatory"
        >
          {!allLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black z-40">
              <AiOutlineLoading3Quarters className="animate-spin text-white text-5xl" />
            </div>
          )}

          <div className="flex flex-col w-full h-full pt-[40px]">
            {reels.map((id) => (
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
                ></iframe>

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhoneReelsCarousel;

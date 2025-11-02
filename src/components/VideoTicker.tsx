import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const reels = [
  "DP8_X_QCqh0",
  "DPO63Pnijst",
  "DP2EVcliZXg",
  "DPe4rbZCBYI",
  "DOCPiz_lUVg",
];

const VideoTicker: React.FC = () => {
  const [loadedCount, setLoadedCount] = useState(0);
  const total = reels.length * 10; // repeated 10x for infinite scroll

  const handleLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  const allLoaded = loadedCount >= total;

  return (
    <div className="relative w-full">
      {!allLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
          <AiOutlineLoading3Quarters className="animate-spin text-blue text-5xl" />
        </div>
      )}

      <div
        className={`overflow-hidden w-full bg-white py-4 transition-opacity duration-500 ${
          allLoaded ? "opacity-100" : "opacity-50"
        }`}
      >
        <div className="flex animate-marquee whitespace-nowrap gap-4">
          {Array(10)
            .fill(0)
            .flatMap(() => reels)
            .map((id, idx) => (
              <iframe
                key={`${id}-${idx}`}
                src={`https://www.instagram.com/reel/${id}/embed`}
                width="250"
                height="366"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media"
                className="rounded-xl shadow-md"
                onLoad={handleLoad}
              ></iframe>
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideoTicker;

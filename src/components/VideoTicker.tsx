import React from "react";

import video1 from "../Video/video1.mp4";
import video2 from "../Video/video2.mp4";
import video3 from "../Video/video3.mp4";
import video4 from "../Video/video4.mp4";

// Optional poster images (small jpg/png) to show before video loads

interface VideoItem {
  src: string;
  poster?: string;
}

const videos: VideoItem[] = [
  { src: video1 },
  { src: video2 },
  { src: video3 },
  { src: video4 },
];

const VideoTicker: React.FC = () => {
  return (
    <div className="overflow-hidden w-full bg-white py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Repeat videos for smooth infinite scroll */}
        {Array(20)
          .fill(0)
          .flatMap(() => videos)
          .map((video, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center w-40 shrink-0 mx-2"
            >
              <video
                src={video.src}
                poster={video.poster}
                muted
                loop
                playsInline
                preload="metadata" // only load metadata initially
                className="w-full aspect-[9/16] object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                onMouseOver={(e) => e.currentTarget.play()} // play on hover
                onMouseOut={(e) => e.currentTarget.pause()} // pause when hover ends
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default VideoTicker;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Zap } from "lucide-react";

export function ImpactSection() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: false,
    });
  }, []);

  return (
    <section className="py-24 bg-black relative text-white overflow-hidden">
      {/* 🌌 ANIMATED PARTICLES BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full bg-gradient-to-b from-black/90 to-black/70"></div>

        {[...Array(30)].map((_, idx) => (
          <div
            key={idx}
            className="absolute w-2 h-2 bg-[rgb(100,189,249)] rounded-full opacity-50 animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}

        {/* 🌊 ANIMATED WAVE GRAPH */}
        <svg
          className="absolute w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "rgb(100,189,249)", stopOpacity: 0.8 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "rgb(59,130,246)", stopOpacity: 0.6 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgb(100,189,249)", stopOpacity: 0.8 }}
              />
            </linearGradient>
          </defs>
          <path
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="3"
            d="M0,100 Q250,50 500,100 T1000,100 Q1250,50 1500,100 T2000,100"
            className="animate-wave"
          />
          <path
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
            opacity="0.5"
            d="M0,150 Q250,100 500,150 T1000,150 Q1250,100 1500,150 T2000,150"
            className="animate-wave-delayed"
          />
          <circle cx="200" cy="100" r="8" fill="rgb(100,189,249)">
            <animate
              attributeName="cy"
              values="100;80;100"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="500" cy="100" r="6" fill="rgb(59,130,246)">
            <animate
              attributeName="cy"
              values="100;120;100"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="800" cy="150" r="5" fill="rgb(100,189,249)">
            <animate
              attributeName="cy"
              values="150;130;150"
              dur="3.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      <style>{`
        @keyframes pulseSlow {
          0%, 100% { transform: scale(0.5); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulseSlow 6s infinite ease-in-out;
        }
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-500px); }
        }
        @keyframes wave-delayed {
          0% { transform: translateX(0); }
          100% { transform: translateX(-500px); }
        }
        .animate-wave {
          animation: wave 15s linear infinite;
        }
        .animate-wave-delayed {
          animation: wave-delayed 20s linear infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>

      {/* MAIN CONTENT - CENTERED */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-8"
          data-aos="fade-down"
        >
          Why Professional Media Management Matters
        </h2>

        <div
          className="flex flex-col items-center gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Zap
            className="w-16 h-16 text-[rgb(100,189,249)]"
            strokeWidth={1.5}
          />

          <div className="max-w-3xl">
            <p className="text-xl leading-relaxed mb-6 text-gray-200">
              In today's fast-paced digital world, you have{" "}
              <span className="font-bold text-[rgb(100,189,249)]">
                less than 3 seconds
              </span>{" "}
              to make an impression. Effective social media is the difference
              between{" "}
              <span className="font-bold text-white">
                being noticed or being ignored
              </span>
              .
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              That's why investing in professional social media management is
              key for brands that want to grow. At Visitour Media, we craft
              engaging content, manage your platforms strategically, and build
              authentic connections that turn followers into loyal customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Camera, Plane, Sparkles } from "lucide-react";
import { useState } from "react";
import mzaLogo from "../logo/logo.jpg";

const teamMembers = [
  {
    name: "Anthony Alves",
    role: "Founder & CEO",
    icon: Camera,
    bio: "Heyo! I'm Anthony, self-proclaimed entrepreneur and founder of Visitour. I am passionate about all things real estate and especially photography. I picked up an old DSLR back in 2022 and have been obsessed with home photography ever since. My dream is to one day sell the properties I take pictures of!",
    image: mzaLogo,
    stat: "100+ Properties",
    quote: "Capturing dreams, one property at a time",
  },
  {
    name: "Tyler Morin",
    role: "Co-Founder & Creative Director",
    icon: Sparkles,
    bio: "Hi, I'm Tyler Morin, a 22-year-old entrepreneur and one of two founders of Visitour. I studied Entrepreneurship at Champlain College and fell in love with real estate while exploring a career as a real estate agent. My passion for creative media, including graphics and cinematic videos, inspired me to start Visitour, where I showcase properties with stunning visuals.",
    image: mzaLogo,
    stat: "500+ Videos",
    quote: "Turning visions into viral content",
  },
  {
    name: "Fraid Zada",
    role: "Sales Lead",
    icon: Plane,
    bio: "Yo, I'm Fraid Zada, a professional photographer and drone pilot. I am a self-taught photographer who's comfortable shooting all kinds of subjects. My lengthy career began underwater during my time as a scuba diver. Since then, I have expanded my horizons into landscape, portrait, and even automotive photography! My new obsession is aerial real estate content. My background as an airplane pilot shines through the quality of my work.",
    image: mzaLogo,
    stat: "1000+ Flight Hours",
    quote: "Taking your brand to new heights",
  },
];

export function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black relative text-white overflow-hidden">
      {/* 🌌 ANIMATED PARTICLES BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full bg-gradient-to-b from-black/90 to-black/70"></div>

        {/* glowing particles */}
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

        <style>{`
          @keyframes pulseSlow {
            0%, 100% { transform: scale(0.5); opacity: 0.3; }
            50% { transform: scale(1.2); opacity: 0.8; }
          }
          .animate-pulse-slow {
            animation: pulseSlow 6s infinite ease-in-out;
          }
        `}</style>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet The <span className="text-[rgb(100,189,249)]">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The creative minds behind Visitour Media. We're passionate about
            helping businesses grow through innovative media and marketing
            solutions.
          </p>
        </div>

        <div className="space-y-24">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            const isEven = index % 2 === 0;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* Image Card with Hover Overlay */}
                <div className="w-full md:w-1/2">
                  <div
                    className="relative rounded-2xl border-2 overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgb(100,189,249)] cursor-pointer group"
                    style={{
                      borderColor: "rgb(100,189,249)",
                      boxShadow: "0 0 40px rgba(100,189,249,0.3)",
                      backgroundImage: `url(${member.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "24rem",
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Stat Badge */}
                    <div className="absolute top-4 right-4 bg-[rgb(100,189,249)] text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                      {member.stat}
                    </div>

                    {/* Hover Overlay */}
                    <div
                      className={`absolute inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-8 transition-opacity duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Icon
                        className="w-16 h-16 text-[rgb(100,189,249)] mb-4"
                        strokeWidth={1.5}
                      />
                      <p className="text-xl text-center text-white font-semibold italic">
                        "{member.quote}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon
                      className="w-10 h-10 text-[rgb(100,189,249)]"
                      strokeWidth={1.5}
                    />
                    <div>
                      <h3 className="text-3xl font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="text-lg font-medium text-[rgb(100,189,249)]">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <div className="rounded-2xl p-12 max-w-4xl mx-auto bg-black border-2 border-[rgb(100,189,249)] shadow-[0_0_40px_rgba(100,189,249,0.3)]">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help elevate your brand and drive real
              results for your business.
            </p>
            <button className="px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 bg-[rgb(100,189,249)] text-black hover:opacity-90 hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

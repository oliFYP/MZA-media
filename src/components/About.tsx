import { Camera, Plane, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import mzaLogo from "../logo/logo.jpg";

const teamMembers = [
  {
    name: "Anthony Alves",
    role: "Founder & CEO",
    icon: Camera,
    bio: "Heyo! I'm Anthony, self-proclaimed entrepreneur and founder of Visitour. I am passionate about all things real estate and especially photography. I picked up an old DSLR back in 2022 and have been obsessed with home photography ever since. My dream is to one day sell the properties I take pictures of!",
    image: mzaLogo,
    quote: "Capturing dreams, one property at a time",
  },
  {
    name: "Tyler Morin",
    role: "Co-Founder & Creative Director",
    icon: Sparkles,
    bio: "Hi, I'm Tyler Morin, a 22-year-old entrepreneur and one of two founders of Visitour. I studied Entrepreneurship at Champlain College and fell in love with real estate while exploring a career as a real estate agent. My passion for creative media, including graphics and cinematic videos, inspired me to start Visitour, where I showcase properties with stunning visuals.",
    image: mzaLogo,
    quote: "Turning visions into viral content",
  },
  {
    name: "Fraid Zada",
    role: "Sales Lead",
    icon: Plane,
    bio: "Yo, I'm Fraid Zada, a professional photographer and drone pilot. I am a self-taught photographer who's comfortable shooting all kinds of subjects. My lengthy career began underwater during my time as a scuba diver. Since then, I have expanded my horizons into landscape, portrait, and even automotive photography! My new obsession is aerial real estate content. My background as an airplane pilot shines through the quality of my work.",
    image: mzaLogo,
    quote: "Taking your brand to new heights",
  },
];

export function About() {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#09090F" }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(ellipse at top right, rgba(100,189,249,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20" data-aos="fade-up">
          <span
            className="text-xs font-medium uppercase block mb-4"
            style={{ color: "#C4FF47", letterSpacing: "0.3em" }}
          >
            The Team
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="text-4xl md:text-6xl font-bold leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Meet The
              <br />
              <span style={{ color: "#64BDF9" }}>Minds Behind</span>
            </h2>
            <p
              className="text-base max-w-sm leading-relaxed"
              style={{ color: "#5A6585" }}
            >
              The creative minds behind Visitour Media. We're passionate about
              helping businesses grow through innovative media and marketing
              solutions.
            </p>
          </div>
        </div>

        {/* Team grid */}
        <div className="space-y-20">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            const isEven = index % 2 === 0;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-10 md:gap-16 items-center`}
                data-aos="fade-up"
              >
                {/* Portrait */}
                <div className="w-full md:w-5/12 flex-shrink-0">
                  <div
                    className="relative rounded-2xl overflow-hidden cursor-pointer"
                    style={{ height: "380px" }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-300"
                      style={{
                        backgroundColor: "rgba(6,7,15,0.92)",
                        opacity: isHovered ? 1 : 0,
                      }}
                    >
                      <Icon
                        size={44}
                        style={{ color: "#64BDF9", marginBottom: "16px" }}
                        strokeWidth={1.5}
                      />
                      <p
                        className="text-lg text-center font-medium italic"
                        style={{ color: "#E4ECF7" }}
                      >
                        "{member.quote}"
                      </p>
                    </div>

                    {/* Frame border */}
                    <div
                      className="absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none"
                      style={{
                        border: `2px solid ${isHovered ? "#64BDF9" : "#1B1E30"}`,
                        boxShadow: isHovered
                          ? "0 0 40px rgba(100,189,249,0.2)"
                          : "none",
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-7/12">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon
                      size={18}
                      style={{ color: "#64BDF9" }}
                      strokeWidth={1.5}
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#64BDF9" }}
                    >
                      {member.role}
                    </span>
                  </div>
                  <h3
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#E4ECF7",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "#5A6585" }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="mt-20 p-10 md:p-14 rounded-2xl text-center"
          data-aos="fade-up"
          style={{
            backgroundColor: "#0D0F1E",
            border: "1px solid #1B1E30",
          }}
        >
          <h3
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "#E4ECF7" }}
          >
            Ready to Work Together?
          </h3>
          <p
            className="text-base mb-8 max-w-xl mx-auto"
            style={{ color: "#5A6585" }}
          >
            Let's discuss how we can help elevate your brand and drive real
            results for your business.
          </p>
          <a
            href="#contact"
            className="inline-flex px-10 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#C4FF47", color: "#06070F" }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

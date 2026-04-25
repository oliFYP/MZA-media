import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import IPhoneReelsCarousel from "./IPhoneReelsCarousel";

const reviews = [
  {
    text: "Visitour Media transformed our social presence. Our engagement skyrocketed!",
    author: "Sarah M.",
    role: "Fitness Coach",
  },
  {
    text: "Professional, creative, and results-driven. Best investment we made!",
    author: "Mike T.",
    role: "Real Estate Agent",
  },
  {
    text: "They handle everything so I can focus on my business. Highly recommend!",
    author: "Jessica L.",
    role: "Restaurant Owner",
  },
  {
    text: "Incredible content quality and consistency. Our followers love it!",
    author: "David R.",
    role: "Tech Entrepreneur",
  },
  {
    text: "Game changer for our brand. Worth every penny and more!",
    author: "Amanda K.",
    role: "Lifestyle Blogger",
  },
];

export function Projects() {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#09090F" }}
    >
      {/* Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-0 items-center max-w-7xl mx-auto px-6 py-24">
        {/* Text block */}
        <div className="mx-auto md:mx-0 max-w-xl" data-aos="fade-right">
          <span
            className="text-xs font-medium uppercase block mb-6"
            style={{ color: "#C4FF47", letterSpacing: "0.3em" }}
          >
            Our Work
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Building{" "}
            <span style={{ color: "#64BDF9" }}>Authentic</span>
            <br />
            Digital Presence
          </h2>

          <p
            className="text-base leading-relaxed mb-5"
            style={{ color: "#5A6585" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We partnered with a rising creator to transform their social presence
            from scattered content to a cohesive, growth-focused digital strategy.
            Through consistent posting, strategic content planning, and community
            engagement, we helped increase their follower base by 300% in just 6
            months.
          </p>
          <p
            className="text-base leading-relaxed mb-10"
            style={{ color: "#5A6585" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our complete digital management approach handled everything from
            scripting and filming to editing and strategic posting, allowing the
            creator to focus on their craft while we drove measurable growth.
          </p>

          {/* Highlight stat */}
          <div
            className="inline-flex items-baseline gap-3 px-6 py-4 rounded-xl"
            style={{
              backgroundColor: "#0D0F1E",
              border: "1px solid #1B1E30",
            }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span
              className="text-4xl font-bold"
              style={{
                fontFamily: "var(--font-display)",
                color: "#C4FF47",
              }}
            >
              300%
            </span>
            <span className="text-sm" style={{ color: "#5A6585" }}>
              follower growth
              <br />
              in 6 months
            </span>
          </div>
        </div>

        {/* iPhone carousel */}
        <div
          className="flex justify-center w-full"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div className="scale-90 sm:scale-100 max-w-full">
            <IPhoneReelsCarousel />
          </div>
        </div>
      </div>

      {/* Reviews ticker */}
      <div
        className="relative py-10 overflow-hidden"
        style={{
          borderTop: "1px solid #1B1E30",
          borderBottom: "1px solid #1B1E30",
          backgroundColor: "#06070F",
        }}
      >
        <div className="flex animate-ticker">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-5 px-3 flex-shrink-0">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 px-8 py-6 rounded-xl flex-shrink-0"
                  style={{
                    backgroundColor: "#0D0F1E",
                    border: "1px solid #1B1E30",
                    minWidth: "420px",
                  }}
                >
                  <span
                    className="text-3xl font-bold flex-shrink-0 leading-none"
                    style={{
                      color: "#64BDF9",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    "
                  </span>
                  <div>
                    <p
                      className="text-sm mb-2 leading-relaxed"
                      style={{ color: "#9AA3BE" }}
                    >
                      {review.text}
                    </p>
                    <p className="text-xs font-semibold" style={{ color: "#64BDF9" }}>
                      — {review.author},{" "}
                      <span
                        style={{ color: "#5A6585", fontWeight: 400 }}
                      >
                        {review.role}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

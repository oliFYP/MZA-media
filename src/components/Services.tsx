import { FileText, Film, Scissors, Share2 } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const workflow = [
  {
    icon: FileText,
    title: "Script",
    description:
      "We craft compelling scripts tailored to your brand voice and audience. Every word is designed to engage, inspire, and drive connection with your community.",
    step: "01",
  },
  {
    icon: Film,
    title: "Film",
    description:
      "Professional cinematography brings your vision to life. We capture authentic moments that showcase your personality and resonate with your followers.",
    step: "02",
  },
  {
    icon: Scissors,
    title: "Edit",
    description:
      "Expert editing transforms raw footage into polished content. We add pacing, effects, and color grading that amplifies your message and keeps viewers engaged.",
    step: "03",
  },
  {
    icon: Share2,
    title: "Post",
    description:
      "Strategic posting and social media management maximize your reach. We ensure your content reaches the right audience at the optimal time.",
    step: "04",
  },
];

export function Services() {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#06070F" }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #64BDF9, transparent)",
        }}
      />

      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(ellipse at top right, rgba(100,189,249,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20" data-aos="fade-up">
          <span
            className="text-xs font-medium uppercase block mb-4"
            style={{ color: "#C4FF47", letterSpacing: "0.3em" }}
          >
            How We Work
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="text-4xl md:text-6xl font-bold leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Digital Management
              <br />
              <span style={{ color: "#64BDF9" }}>Process</span>
            </h2>
            <p
              className="text-base max-w-sm leading-relaxed"
              style={{ color: "#5A6585", fontFamily: "var(--font-body)" }}
            >
              We manage every aspect of your digital presence. From scripting to
              publishing and everything in between, we handle the complete
              lifecycle of your content.
            </p>
          </div>
        </div>

        {/* Step cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {workflow.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="relative group"
              >
                <div
                  className="relative p-8 rounded-2xl h-full transition-all duration-300 cursor-default"
                  style={{
                    backgroundColor: "#0D0F1E",
                    border: "1px solid #1B1E30",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#64BDF9";
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "0 0 40px rgba(100,189,249,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "#1B1E30";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  {/* Large ghost step number */}
                  <div
                    className="font-bold mb-6 leading-none select-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "4.5rem",
                      color: "rgba(100,189,249,0.08)",
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {step.step}
                  </div>

                  <Icon
                    className="mb-5 transition-transform duration-300 group-hover:scale-110"
                    size={28}
                    style={{ color: "#64BDF9" }}
                    strokeWidth={1.5}
                  />

                  <h3
                    className="text-xl font-bold mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "#E4ECF7",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#5A6585" }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Connector chevron */}
                {index < 3 && (
                  <div
                    className="hidden md:flex absolute top-1/2 -right-3.5 z-10 w-7 h-7 items-center justify-center -translate-y-1/2"
                    style={{
                      backgroundColor: "#06070F",
                      border: "1px solid #1B1E30",
                      borderRadius: "50%",
                    }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <path
                        d="M3 1.5L7 5L3 8.5"
                        stroke="#3D4560"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA + progress */}
        <div
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8"
          data-aos="fade-up"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#C4FF47", color: "#06070F" }}
          >
            Get Started
          </a>

          <div className="flex-1 max-w-xs w-full">
            <div
              className="flex justify-between text-xs mb-2"
              style={{ color: "#5A6585" }}
            >
              <span>Process Completion</span>
              <span style={{ color: "#64BDF9", fontWeight: 600 }}>100%</span>
            </div>
            <div
              className="h-1 rounded-full overflow-hidden"
              style={{ backgroundColor: "#1B1E30" }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: "100%",
                  background: "linear-gradient(90deg, #64BDF9, #C4FF47)",
                }}
              />
            </div>
            <p
              className="text-xs mt-2"
              style={{ color: "#3D4560" }}
            >
              100% Commitment to Excellence
            </p>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #1B1E30, transparent)",
        }}
      />
    </section>
  );
}

export default Services;

import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#06070F" }}
    >
      {/* Central glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -55%)",
          width: "900px",
          height: "700px",
          background:
            "radial-gradient(ellipse at center, rgba(100,189,249,0.11) 0%, rgba(100,189,249,0.04) 45%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100,189,249,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(100,189,249,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Corner accent — top right */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "320px",
          height: "320px",
          background:
            "radial-gradient(ellipse at top right, rgba(196,255,71,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full pb-24">
        {/* Eyebrow */}
        <div
          className="flex items-center justify-center gap-3 mb-8"
          style={{ animation: "fadeUp 0.8s 0.2s both" }}
        >
          <span className="h-px w-10" style={{ backgroundColor: "#64BDF9" }} />
          <span
            className="text-xs font-medium uppercase"
            style={{
              color: "#64BDF9",
              letterSpacing: "0.35em",
              fontFamily: "var(--font-body)",
            }}
          >
            Social Media Management
          </span>
          <span className="h-px w-10" style={{ backgroundColor: "#64BDF9" }} />
        </div>

        {/* Giant headline */}
        <h1
          className="leading-none mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 11vw, 10.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 0.88,
            animation: "fadeUp 0.9s 0.4s both",
          }}
        >
          <span
            style={{
              background: "linear-gradient(140deg, #E4ECF7 25%, #64BDF9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AMPLIFY
          </span>
        </h1>

        {/* Sub-headline */}
        <div
          className="flex items-baseline justify-center gap-4 mb-10"
          style={{ animation: "fadeUp 0.9s 0.6s both" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 5vw, 4.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#E4ECF7",
            }}
          >
            Your Brand
            <span style={{ color: "#C4FF47" }}>.</span>
          </h2>
        </div>

        {/* Body */}
        <p
          className="text-base sm:text-lg max-w-lg mx-auto mb-12 leading-relaxed"
          style={{
            color: "#5A6585",
            fontFamily: "var(--font-body)",
            animation: "fadeUp 0.9s 0.8s both",
          }}
        >
          Social media management business focusing on personal branding to help
          clients improve visibility online. Developing a deeper connection
          between a personality and their clients.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ animation: "fadeUp 0.9s 1s both" }}
        >
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:scale-105 hover:opacity-90"
            style={{ backgroundColor: "#C4FF47", color: "#06070F" }}
          >
            Get Started
            <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium border transition-all duration-300"
            style={{
              borderColor: "#1B1E30",
              color: "#7A85A8",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#64BDF9";
              (e.currentTarget as HTMLAnchorElement).style.color = "#64BDF9";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1B1E30";
              (e.currentTarget as HTMLAnchorElement).style.color = "#7A85A8";
            }}
          >
            Our Process
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          borderTop: "1px solid #1B1E30",
          animation: "fadeIn 0.8s 1.2s both",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 py-5 grid grid-cols-3">
          {[
            { value: "500K+", label: "Views Generated" },
            { value: "50+", label: "Clients Served" },
            { value: "95%", label: "Client Retention" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center px-4"
              style={{ borderLeft: i > 0 ? "1px solid #1B1E30" : "none" }}
            >
              <div
                className="text-xl sm:text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#64BDF9" }}
              >
                {stat.value}
              </div>
              <div
                className="text-[10px] sm:text-xs uppercase tracking-widest mt-0.5"
                style={{ color: "#3D4560" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-24 right-8 hidden lg:flex flex-col items-center gap-2"
        style={{ animation: "fadeIn 1s 1.5s both" }}
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#64BDF9]" />
        <span
          className="text-[9px] uppercase tracking-[0.3em]"
          style={{ color: "#3D4560", writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}

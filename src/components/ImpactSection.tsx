import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";

export function ImpactSection() {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  return (
    <section
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: "#64BDF9" }}
    >
      {/* Top right glow — white soft */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(ellipse at top right, rgba(255,255,255,0.18) 0%, transparent 60%)",
        }}
      />
      {/* Bottom left shadow */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(ellipse at bottom left, rgba(0,40,80,0.18) 0%, transparent 60%)",
        }}
      />

      {/* Subtle grid on blue */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ color: "#06070F" }}
      >
        {/* Eyebrow */}
        <div
          className="flex items-center justify-center gap-3 mb-10"
          data-aos="fade-down"
        >
          <span
            className="h-px w-12"
            style={{ backgroundColor: "rgba(6,7,15,0.25)" }}
          />
          <span
            className="text-xs font-medium uppercase"
            style={{
              color: "rgba(6,7,15,0.55)",
              letterSpacing: "0.35em",
            }}
          >
            Why It Matters
          </span>
          <span
            className="h-px w-12"
            style={{ backgroundColor: "rgba(6,7,15,0.25)" }}
          />
        </div>

        {/* Big statement */}
        <h2
          className="leading-none mb-12"
          data-aos="fade-up"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 7vw, 7rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#06070F",
          }}
        >
          Why Professional
          <br />
          Media Management
          <br />
          <span style={{ opacity: 0.4 }}>Matters</span>
        </h2>

        {/* Body text */}
        <div
          className="max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <p
            className="text-xl md:text-2xl font-medium leading-relaxed mb-6"
            style={{ color: "#06070F", opacity: 0.85 }}
          >
            In today's fast-paced digital world, you have{" "}
            <span
              className="font-black px-2 py-0.5 rounded-md"
              style={{ backgroundColor: "#06070F", color: "#C4FF47" }}
            >
              less than 3 seconds
            </span>{" "}
            to make an impression. Effective social media is the difference
            between{" "}
            <strong>being noticed or being ignored</strong>.
          </p>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "#06070F", opacity: 0.65 }}
          >
            That's why investing in professional social media management is key
            for brands that want to grow. At Visitour Media, we craft engaging
            content, manage your platforms strategically, and build authentic
            connections that turn followers into loyal customers.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-14" data-aos="fade-up" data-aos-delay="300">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:opacity-90"
            style={{ backgroundColor: "#06070F", color: "#C4FF47" }}
          >
            Start Growing Today
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;

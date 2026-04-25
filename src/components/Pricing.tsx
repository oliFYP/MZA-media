import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Kickstart",
    price: "$2,000",
    description: "First Time Social Users",
    features: [
      "8 Short Form Videos per month",
      "1 filming day + 2 on request",
      "Scripting",
      "Posting",
      "24/7 mobile support",
    ],
    popular: false,
  },
  {
    name: "Momentum",
    price: "$2,500",
    description: "Professionals Ready For More",
    features: [
      "15 Short Form Videos per month",
      "2 filming days + 3 on request",
      "Scripting",
      "Posting",
      "24/7 mobile support",
    ],
    popular: true,
  },
  {
    name: "Apex",
    price: "$4,500",
    description: "Influencers and Leaders",
    features: [
      "30 Short Form Videos per month",
      "2 filming days + 5 on request",
      "Scripting",
      "Posting",
      "24/7 mobile support",
    ],
    popular: false,
  },
];

const stats = [
  { value: "500K+", label: "Views Generated" },
  { value: "50+", label: "Clients Served" },
  { value: "95%", label: "Client Retention" },
];

export function Pricing() {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#06070F" }}
    >
      {/* Glow corner */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(ellipse at bottom left, rgba(100,189,249,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20" data-aos="fade-up">
          <span
            className="text-xs font-medium uppercase block mb-4"
            style={{ color: "#C4FF47", letterSpacing: "0.3em" }}
          >
            Pricing
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="text-4xl md:text-6xl font-bold leading-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Choose Your
              <br />
              <span style={{ color: "#64BDF9" }}>Growth Path</span>
            </h2>
            <p
              className="text-base max-w-sm leading-relaxed"
              style={{ color: "#5A6585" }}
            >
              Tailored packages designed to elevate your brand at every stage of
              your journey. Billed monthly.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative flex flex-col p-8 rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: tier.popular ? "#0D0F1E" : "#080B17",
                border: `1px solid ${tier.popular ? "#64BDF9" : "#1B1E30"}`,
                boxShadow: tier.popular
                  ? "0 0 60px rgba(100,189,249,0.09)"
                  : "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
              }}
            >
              {tier.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                  style={{ backgroundColor: "#C4FF47", color: "#06070F" }}
                >
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3
                  className="text-lg font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "#E4ECF7",
                  }}
                >
                  {tier.name}
                </h3>
                <p className="text-sm mb-6" style={{ color: "#5A6585" }}>
                  {tier.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-5xl font-bold"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: tier.popular ? "#64BDF9" : "#E4ECF7",
                    }}
                  >
                    {tier.price}
                  </span>
                  <span className="text-sm" style={{ color: "#5A6585" }}>
                    /month
                  </span>
                </div>
              </div>

              <ul className="space-y-4 flex-1 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        backgroundColor: "rgba(100,189,249,0.1)",
                        border: "1px solid rgba(100,189,249,0.25)",
                      }}
                    >
                      <Check size={10} style={{ color: "#64BDF9" }} />
                    </div>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "#9AA3BE" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className="w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:opacity-90"
                style={
                  tier.popular
                    ? { backgroundColor: "#64BDF9", color: "#06070F" }
                    : {
                        backgroundColor: "transparent",
                        border: "1px solid #1B1E30",
                        color: "#7A85A8",
                      }
                }
                onMouseEnter={(e) => {
                  if (!tier.popular) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "#64BDF9";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#64BDF9";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!tier.popular) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "#1B1E30";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "#7A85A8";
                  }
                }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Stats band */}
        <div
          className="rounded-2xl p-8 md:p-12 grid md:grid-cols-3"
          style={{
            backgroundColor: "#0D0F1E",
            border: "1px solid #1B1E30",
          }}
          data-aos="fade-up"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center py-8 md:py-0 md:px-8"
              style={{
                borderLeft: i > 0 ? "1px solid #1B1E30" : "none",
                borderTop: i > 0 ? "1px solid #1B1E30" : "none",
              }}
            >
              <span
                className="text-5xl font-bold mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#64BDF9",
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs uppercase tracking-widest"
                style={{ color: "#5A6585" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;

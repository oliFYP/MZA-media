import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question:
      "What makes MZA Media different from other social media management agencies?",
    answer:
      "We don't just post content — we build meaningful digital communities. Our team combines strategy, creativity, and analytics to grow your audience, boost engagement, and strengthen your brand presence across all major platforms.",
  },
  {
    question: "What's included in your social media management packages?",
    answer:
      "Our packages are fully customizable and can include content creation, post scheduling, community management, paid social advertising, influencer collaborations, performance reporting, and strategic growth consultations. Each plan is tailored to your goals and brand identity.",
  },
  {
    question: "How long does it take to see growth?",
    answer:
      "Social media growth depends on consistency and strategy. While some campaigns can gain traction within a few weeks, sustainable growth typically becomes visible within 2–4 months. We focus on long-term engagement and brand credibility rather than quick, short-term spikes.",
  },
  {
    question: "What if I'm not satisfied with the performance?",
    answer:
      "Your satisfaction matters most to us. We monitor analytics daily and adjust strategies to ensure your pages perform at their best. If something isn't delivering results, we refine the approach — from content tone to posting schedules — until it aligns with your vision and KPIs.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Yes! Whether you're a small business looking to build your first audience or an established brand aiming to refine your digital presence, we tailor our services to match your goals, scale, and budget.",
  },
];

export function FAQ() {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#06070F" }}
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #64BDF9, transparent)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16" data-aos="fade-up">
          <span
            className="text-xs font-medium uppercase block mb-4"
            style={{ color: "#C4FF47", letterSpacing: "0.3em" }}
          >
            FAQ
          </span>
          <h2
            className="text-4xl md:text-6xl font-bold leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Frequently Asked
            <br />
            <span style={{ color: "#64BDF9" }}>Questions</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 60}
              className="rounded-xl overflow-hidden transition-all duration-300"
              style={{
                border: `1px solid ${openIndex === index ? "#64BDF9" : "#1B1E30"}`,
                backgroundColor:
                  openIndex === index ? "#0D0F1E" : "#080B17",
              }}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-sm font-mono flex-shrink-0"
                    style={{ color: "#3D4560" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-sm md:text-base font-semibold text-left"
                    style={{
                      color: "#E4ECF7",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {faq.question}
                  </span>
                </div>
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    border: `1px solid ${openIndex === index ? "#64BDF9" : "#1B1E30"}`,
                    backgroundColor:
                      openIndex === index
                        ? "rgba(100,189,249,0.1)"
                        : "transparent",
                  }}
                >
                  {openIndex === index ? (
                    <Minus size={12} style={{ color: "#64BDF9" }} />
                  ) : (
                    <Plus size={12} style={{ color: "#5A6585" }} />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-64" : "max-h-0"
                }`}
              >
                <div
                  className="pb-6"
                  style={{ paddingLeft: "calc(1.5rem + 2rem + 1rem)", paddingRight: "1.5rem" }}
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#5A6585" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center" data-aos="fade-up">
          <p className="mb-4 text-sm" style={{ color: "#5A6585" }}>
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#C4FF47", color: "#06070F" }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

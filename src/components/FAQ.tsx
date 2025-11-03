import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question:
      "What makes MZA Media different from other social media management agencies?",
    answer:
      "We don’t just post content — we build meaningful digital communities. Our team combines strategy, creativity, and analytics to grow your audience, boost engagement, and strengthen your brand presence across all major platforms.",
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
    question: "What if I’m not satisfied with the performance?",
    answer:
      "Your satisfaction matters most to us. We monitor analytics daily and adjust strategies to ensure your pages perform at their best. If something isn’t delivering results, we refine the approach — from content tone to posting schedules — until it aligns with your vision and KPIs.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Yes! Whether you’re a small business looking to build your first audience or an established brand aiming to refine your digital presence, we tailor our services to match your goals, scale, and budget.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-black relative text-white">
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <HelpCircle className="w-16 h-16 mx-auto mb-6 text-[rgb(100,189,249)]" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-200">
            Curious about our social media management services? Browse our FAQs
            or reach out to learn how we can grow your brand online.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`relative bg-black rounded-2xl border-2 border-[rgb(100,189,249)] shadow-[0_0_40px_rgba(100,189,249,0.3)] 
              transition-all duration-300 hover:shadow-[0_0_60px_rgba(100,189,249,0.6)]`}
            >
              <button className="w-full px-6 py-5 flex items-center justify-between text-left rounded-2xl bg-black">
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 py-4 bg-black border-t border-[rgb(100,189,249)]">
                  <p className="text-gray-200 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-white font-bold mb-4">Still have questions?</p>
          <button className="text-black px-8 py-3 rounded-xl font-bold transition-opacity duration-300 bg-[rgb(100,189,249)] hover:opacity-90">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

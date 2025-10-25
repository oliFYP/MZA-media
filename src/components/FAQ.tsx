import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What makes MZA Media different from other marketing agencies?",
    answer:
      "We combine creative excellence with data-driven strategy. Our team doesn't just create beautiful content—we build campaigns that deliver measurable ROI. Plus, we include strategy consultation and performance analytics with every package.",
  },
  {
    question: "What's included in your marketing packages?",
    answer:
      "Our packages are fully customizable based on your needs. Services include social media management, content creation, video production, digital advertising, website development, and brand strategy. Every package includes performance analytics and ongoing optimization.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "While some tactics like paid advertising can show immediate results, building a strong brand presence typically takes 3-6 months. We focus on sustainable growth strategies that deliver long-term value, not just quick wins.",
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer:
      "Your satisfaction is our priority. We offer unlimited revisions on creative work and continuously optimize campaigns based on performance data. If something isn't working, we pivot quickly to find what does.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Yes! From startups to established enterprises, we tailor our services to fit your budget and goals. Whether you need a full marketing department or support in specific areas, we have solutions that scale with your business.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <HelpCircle
            className="w-16 h-16 mx-auto mb-6"
            style={{ color: "rgb(100, 189, 249)" }}
          />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Feeling inquisitive? Have a read through some of our FAQs or feel
            free to contact us for more information!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button
            className="text-white px-8 py-3 rounded-sm font-medium hover:opacity-90 transition-opacity duration-300"
            style={{ backgroundColor: "rgb(100, 189, 249)" }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

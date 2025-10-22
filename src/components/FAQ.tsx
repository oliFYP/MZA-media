import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Why is professional real estate photography important?',
    answer: 'Great photos make people want to buy houses faster. They show off the best parts and make the house look more professional online. Professional photography can hold a buyer\'s attention for 20 seconds compared to just 2 seconds with amateur photos.'
  },
  {
    question: 'What services are included in a typical photoshoot?',
    answer: 'Every photoshoot includes HDR photography, professional editing, and a complimentary 2D floor plan. You can also add virtual tours, drone footage, videos, and virtual staging to create a complete marketing package.'
  },
  {
    question: 'How quickly will I receive my photos?',
    answer: 'You\'ll receive your professionally edited photos within 36 hours of the shoot. We understand that time is crucial in real estate, so we prioritize rapid delivery without compromising quality.'
  },
  {
    question: 'What if I\'m not satisfied with the results?',
    answer: 'Your satisfaction is guaranteed. We offer complimentary touch-ups and re-shoots if needed. We take our work personally and are committed to delivering nothing but our best.'
  },
  {
    question: 'Do you offer single property websites?',
    answer: 'Yes! We create custom single property websites that provide a dedicated online showcase for your listing. This helps your property stand out in the market with a professional, focused presentation.'
  }
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
          <HelpCircle className="w-16 h-16 mx-auto mb-6" style={{ color: 'rgb(100, 189, 249)' }} />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Feeling inquisitive? Have a read through some of our FAQs or feel free to contact us for more information!
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
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="text-white px-8 py-3 rounded-sm font-medium hover:opacity-90 transition-opacity duration-300" style={{ backgroundColor: 'rgb(100, 189, 249)' }}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

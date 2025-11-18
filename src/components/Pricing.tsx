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

export function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: false,
    });
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="py-24 bg-black relative text-white overflow-hidden"
    >
      {/* 💎 SUBTLE FLOATING SHAPES - BLENDED */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full bg-gradient-to-b from-black/90 to-black/70"></div>

        {[...Array(30)].map((_, idx) => (
          <div
            key={idx}
            className="absolute w-2 h-2 bg-[rgb(100,189,249)] rounded-full opacity-50 animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}

        <style>{`
          @keyframes pulseSlow {
            0%, 100% { transform: scale(0.5); opacity: 0.3; }
            50% { transform: scale(1.2); opacity: 0.8; }
          }
          .animate-pulse-slow {
            animation: pulseSlow 6s infinite ease-in-out;
          }
        `}</style>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your{" "}
            <span className="text-[rgb(100,189,249)]">Growth Path</span>
          </h2>
          <p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Tailored packages designed to elevate your brand at every stage
          </p>
          <p
            className="text-sm text-gray-400 mt-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Per user/month, billed annually
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border-2 p-8 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-black/50 backdrop-blur-sm ${
                tier.popular
                  ? "border-[rgb(100,189,249)] shadow-[0_0_40px_rgba(100,189,249,0.3)]"
                  : "border-gray-700"
              }`}
              data-aos="fade-up"
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[rgb(100,189,249)] to-blue-400 text-black font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <p className="text-base text-gray-400">{tier.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[rgb(100,189,249)]">
                    {tier.price}
                  </span>
                  <span className="text-gray-400"> /month</span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[rgb(100,189,249)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? "bg-[rgb(100,189,249)] text-black hover:opacity-90"
                    : "border border-gray-600 text-white hover:bg-[rgb(100,189,249)] hover:text-black"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;

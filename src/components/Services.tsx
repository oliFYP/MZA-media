import { FileText, Film, Scissors, Share2, ArrowRight } from "lucide-react";

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
  return (
    <section
      id="services"
      className="py-24 bg-black relative text-white overflow-hidden"
    >
      {/* 🌌 ANIMATED PARTICLES BACKGROUND */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Digital Management{" "}
            <span className="text-[rgb(100,189,249)]">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We manage every aspect of your digital presence. From scripting to
            publishing and everything in between, we handle the complete
            lifecycle of your content and online identity.
          </p>
        </div>

        {/* Workflow Cards with Connection Lines */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[rgb(100,189,249)] to-transparent opacity-30"></div>

          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {workflow.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="relative group">
                  <div
                    className="relative rounded-2xl border-2 bg-black/50 backdrop-blur-sm p-8 flex flex-col h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-black/70"
                    style={{
                      borderColor: "rgb(100,189,249)",
                      boxShadow: "0 0 40px rgba(100,189,249,0.3)",
                    }}
                  >
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-[rgb(100,189,249)] rounded-full flex items-center justify-center text-black font-bold text-lg shadow-[0_0_20px_rgba(100,189,249,0.6)]">
                      {service.step}
                    </div>

                    <div className="mb-6">
                      <Icon
                        className="w-14 h-14 mb-4 text-[rgb(100,189,249)] group-hover:scale-110 transition-transform duration-300"
                        strokeWidth={1.5}
                      />
                      <h3 className="text-2xl font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow indicator between cards (hidden on last card) */}
                    {index < workflow.length - 1 && (
                      <ArrowRight className="hidden md:block absolute -right-10 top-1/2 -translate-y-1/2 w-8 h-8 text-[rgb(100,189,249)] opacity-50" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 bg-[rgb(100,189,249)] text-black hover:opacity-90 hover:scale-105 shadow-[0_0_30px_rgba(100,189,249,0.4)]">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

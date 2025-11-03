import { FileText, Film, Scissors, Share2 } from "lucide-react";

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
    <section id="services" className="py-24 bg-black relative text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[rgb(100,189,249)]/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Digital Management Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We manage every aspect of your digital presence. From scripting to
            publishing and everything in between, we handle the complete
            lifecycle of your content and online identity.
          </p>
        </div>

        {/* Workflow Grid */}
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {workflow.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl border-2 p-8 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  borderColor: "rgb(100,189,249)",
                  boxShadow: "0 0 40px rgba(100,189,249,0.3)",
                  animationDelay: `${index * 200}ms`,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 50px rgb(100,189,249)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 40px rgba(100,189,249,0.3)")
                }
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <Icon
                      className="w-12 h-12 text-[rgb(100,189,249)]"
                      strokeWidth={1.5}
                    />
                    <span className="text-4xl font-bold text-gray-200">
                      {service.step}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-200/90 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 bg-[rgb(100,189,249)] text-black hover:opacity-90">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

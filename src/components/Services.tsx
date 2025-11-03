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
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Digital Management Process
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            We manage every aspect of your digital presence. From scripting to
            publishing and everything in between, we handle the complete
            lifecycle of your content and online identity.
          </p>
        </div>

        {/* Equal-height cards with 3D borders */}
        <div className="grid md:grid-cols-4 gap-8 mb-16 items-stretch">
          {workflow.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="relative flex flex-col h-full">
                <div
                  className="flex flex-col h-full justify-between bg-gradient-to-br from-black/25 to-[rgb(100,189,249)]/35 
                  rounded-3xl p-8 shadow-lg border-t-4 border-r-4 border-transparent transition-transform duration-300 hover:-translate-y-2"
                  style={{
                    borderTopColor: "rgb(100, 189, 249)",
                    borderRightColor: "rgba(100, 189, 249, 0.7)",
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <Icon
                        className="w-12 h-12"
                        style={{ color: "rgb(100, 189, 249)" }}
                        strokeWidth={1.5}
                      />
                      <span className="text-4xl font-bold text-gray-200">
                        {service.step}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Arrow connector */}
                {index < workflow.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: "rgb(100, 189, 249)" }}
                    >
                      →
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            className="px-10 py-4 rounded-xl text-lg font-bold hover:opacity-90 transition-all duration-300"
            style={{ backgroundColor: "rgb(100, 189, 249)", color: "black" }}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

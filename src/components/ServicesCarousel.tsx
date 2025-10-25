import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Megaphone,
  Palette,
  Video,
  Globe,
  BarChart,
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Social Media Marketing",
    description:
      "Grow your brand presence across all major platforms. We create engaging content, manage campaigns, and build communities that convert followers into customers.",
    color: "from-black to-gray-900",
  },
  {
    icon: Megaphone,
    title: "Digital Advertising",
    description:
      "Reach your target audience with precision-targeted ad campaigns. From Google Ads to social media advertising, we maximize your ROI with data-driven strategies.",
    color: "from-[rgb(100,189,249)] to-blue-400",
  },
  {
    icon: Video,
    title: "Video Production",
    description:
      "Captivate your audience with professional video content. From brand stories to product showcases, we create videos that engage and inspire action.",
    color: "from-black to-gray-900",
  },
  {
    icon: Palette,
    title: "Brand Strategy & Design",
    description:
      "Build a memorable brand identity that resonates with your audience. We craft cohesive visual identities and strategic messaging that sets you apart.",
    color: "from-[rgb(100,189,249)] to-blue-400",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Create stunning, high-converting websites that drive results. We design and develop custom sites optimized for user experience and search engines.",
    color: "from-black to-gray-900",
  },
  {
    icon: BarChart,
    title: "Content Marketing",
    description:
      "Tell your story and establish authority in your industry. From blog posts to email campaigns, we create content that educates, engages, and converts.",
    color: "from-[rgb(100,189,249)] to-blue-400",
  },
];

export function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive marketing services to grow your business and amplify
            your brand
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="w-full flex-shrink-0">
                    <div
                      className={`bg-gradient-to-br ${service.color} p-12 md:p-20 min-h-[500px] flex items-center justify-center`}
                    >
                      <div className="text-center text-white max-w-3xl">
                        <Icon
                          className="w-20 h-20 mx-auto mb-6"
                          strokeWidth={1.5}
                        />
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                          {service.title}
                        </h3>
                        <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/95">
                          {service.description}
                        </p>
                        <button className="bg-white text-gray-900 px-8 py-3 rounded-sm font-medium hover:bg-gray-100 transition-colors duration-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>

          <div className="flex justify-center gap-3 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-12" : "w-2 bg-gray-400"
                }`}
                style={
                  index === currentIndex
                    ? { backgroundColor: "rgb(100, 189, 249)" }
                    : {}
                }
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

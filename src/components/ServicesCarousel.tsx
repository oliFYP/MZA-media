import { useState } from 'react';
import { ChevronLeft, ChevronRight, Camera, Video, Plane, Palette, Globe, Layout } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'HDR Photography',
    description: 'Experience the Impact of HDR Real Estate Photography. Enhance Your Listings with Striking, High-Quality Imagery.',
    color: 'from-black to-gray-900'
  },
  {
    icon: Globe,
    title: '360° Virtual Tours',
    description: 'Transform Property Showings with Dynamic 360° Virtual Tours. Showcase Listings Seamlessly, Empowering Real Estate Agents to Impress Clients with Every Click.',
    color: 'from-[rgb(100,189,249)] to-blue-400'
  },
  {
    icon: Video,
    title: 'Property Showcase Videos',
    description: 'Unleash Cinematic Brilliance: Elevate Your Listings with Our Showcase Videos. Captivate Buyers with Stunning Visuals, Highlighting Every Detail.',
    color: 'from-black to-gray-900'
  },
  {
    icon: Plane,
    title: 'Aerial Drone Media',
    description: 'Elevate Your Listings with Aerial Drone Media. Showcase Properties from Unique Perspectives to Attract Buyers Faster.',
    color: 'from-[rgb(100,189,249)] to-blue-400'
  },
  {
    icon: Palette,
    title: 'Virtual Staging',
    description: 'Transform Empty Spaces into Dream Homes with Our Virtual Staging Services. Enhance Property Appeal and Help Buyers Visualize the Potential of Every Room.',
    color: 'from-black to-gray-900'
  },
  {
    icon: Layout,
    title: 'Single Property Websites',
    description: 'Highlight Your Property with a Custom Single Property Website. Stand Out in the Market with a Dedicated Online Showcase Tailored to Your Listing.',
    color: 'from-[rgb(100,189,249)] to-blue-400'
  }
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
            Comprehensive media solutions to showcase your properties at their absolute best
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
                    <div className={`bg-gradient-to-br ${service.color} p-12 md:p-20 min-h-[500px] flex items-center justify-center`}>
                      <div className="text-center text-white max-w-3xl">
                        <Icon className="w-20 h-20 mx-auto mb-6" strokeWidth={1.5} />
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
                  index === currentIndex ? 'w-12' : 'w-2 bg-gray-400'
                }`}
                style={index === currentIndex ? { backgroundColor: 'rgb(100, 189, 249)' } : {}}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Zap } from "lucide-react";
import mzaLogo from "../logo/logo.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function ImpactSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className="py-24 bg-black relative text-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2
              data-aos="fade-right"
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Why Professional Media Management Matters
            </h2>
            <div data-aos="fade-right" className="flex items-start gap-4 mb-6">
              <Zap
                className="w-12 h-12 flex-shrink-0 mt-1 text-[rgb(100,189,249)]"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-xl leading-relaxed mb-4 text-gray-200">
                  In today's fast-paced digital world, you have{" "}
                  <span className="font-bold text-[rgb(100,189,249)]">
                    less than 3 seconds
                  </span>{" "}
                  to make an impression. Effective social media is the
                  difference between{" "}
                  <span className="font-bold text-white">
                    being noticed or being ignored
                  </span>
                  .
                </p>
                <p className="text-lg text-gray-200 leading-relaxed">
                  That’s why investing in professional social media management
                  is key for brands that want to grow. At Visitour Media, we
                  craft engaging content, manage your platforms strategically,
                  and build authentic connections that turn followers into loyal
                  customers.
                </p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              {[48, 64].map((h, idx) => (
                <div
                  key={idx}
                  data-aos="flip-up"
                  className="h-48 md:h-64 border-2 rounded-2xl bg-cover bg-center shadow-[0_0_40px_rgba(100,189,249,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgb(100,189,249)]"
                  style={{
                    backgroundImage: `url(${mzaLogo})`,
                    borderColor: "rgb(100,189,249)",
                    height: `${h * 4}px`,
                  }}
                ></div>
              ))}
            </div>
            <div className="space-y-4 pt-8">
              {[64, 48].map((h, idx) => (
                <div
                  key={idx}
                  data-aos="flip-up"
                  className="h-48 md:h-64 border-2 rounded-2xl bg-cover bg-center shadow-[0_0_40px_rgba(100,189,249,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgb(100,189,249)]"
                  style={{
                    backgroundImage: `url(${mzaLogo})`,
                    borderColor: "rgb(100,189,249)",
                    height: `${h * 4}px`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

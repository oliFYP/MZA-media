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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              data-aos="fade-right"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Why Professional Media Marketing Matters
            </h2>
            <div data-aos="fade-right" className="flex items-start gap-4 mb-6">
              <Zap
                className="w-12 h-12 flex-shrink-0 mt-1"
                style={{ color: "rgb(100, 189, 249)" }}
              />
              <div>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  In today's digital landscape, brands have{" "}
                  <span
                    className="font-bold"
                    style={{ color: "rgb(100, 189, 249)" }}
                  >
                    less than 3 seconds
                  </span>{" "}
                  to capture attention. Quality content is the difference
                  between{" "}
                  <span className="font-bold text-gray-900">
                    being seen or being scrolled past
                  </span>
                  .
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  That's why investing in professional media and marketing is
                  essential for businesses looking to grow. At Visitour Media,
                  we create compelling content and strategic campaigns that
                  drive real results and build lasting customer relationships.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div
                data-aos="flip-up"
                className="h-48 bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: `url(${mzaLogo})` }}
              ></div>
              <div
                data-aos="flip-up"
                className="h-64 bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: `url(${mzaLogo})` }}
              ></div>
            </div>
            <div className="space-y-4 pt-8">
              <div
                data-aos="flip-up"
                className="h-64 bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: `url(${mzaLogo})` }}
              ></div>
              <div
                data-aos="flip-up"
                className="h-48 bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: `url(${mzaLogo})` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

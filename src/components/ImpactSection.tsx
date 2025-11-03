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
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              data-aos="fade-right"
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Why Professional Media Managment Matters
            </h2>
            <div data-aos="fade-right" className="flex items-start gap-4 mb-6">
              <Zap
                className="w-12 h-12 flex-shrink-0 mt-1"
                style={{ color: "rgb(100, 189, 249)" }}
              />
              <div>
                <p className="text-xl text-white leading-relaxed mb-4">
                  In today's fast-paced digital world, you have{" "}
                  <span
                    className="font-bold"
                    style={{ color: "rgb(100, 189, 249)" }}
                  >
                    less than 3 seconds
                  </span>{" "}
                  to make an impression. Effective social media is the
                  difference between{" "}
                  <span className="font-bold text-white">
                    being noticed or being ignored
                  </span>
                  .
                </p>
                <p className="text-lg text-white leading-relaxed">
                  That’s why investing in professional social media management
                  is key for brands that want to grow. At Visitour Media, we
                  craft engaging content, manage your platforms strategically,
                  and build authentic connections that turn followers into loyal
                  customers.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div
                data-aos="flip-up"
                className="h-48  border-t-4 border-r-4 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: `url(${mzaLogo})`,
                  borderTopColor: "rgb(100, 189, 249)",
                  borderRightColor: "rgba(100, 189, 249, 0.7)",
                }}
              ></div>
              <div
                data-aos="flip-up"
                className="h-64 border-t-4 border-r-4 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: `url(${mzaLogo})`,
                  borderTopColor: "rgb(100, 189, 249)",
                  borderRightColor: "rgba(100, 189, 249, 0.7)",
                }}
              ></div>
            </div>
            <div className="space-y-4 pt-8">
              <div
                data-aos="flip-up"
                className="h-64 border-t-4 border-r-4 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: `url(${mzaLogo})`,
                  borderTopColor: "rgb(100, 189, 249)",
                  borderRightColor: "rgba(100, 189, 249, 0.7)",
                }}
              ></div>
              <div
                data-aos="flip-up"
                className="h-48 border-t-4 border-r-4 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: `url(${mzaLogo})`,
                  borderTopColor: "rgb(100, 189, 249)",
                  borderRightColor: "rgba(100, 189, 249, 0.7)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import mzaLogo from "../logo/mza.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-visible">
      {/* Background */}
      <div className="absolute inset-0 bg-black bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-[rgb(100,189,249)]/40"></div>
      </div>

      {/* Logo */}
      <div
        className="
          absolute 
          top-20 
          left-1/2 
          -translate-x-1/2 
          sm:top-8 sm:left-8 sm:translate-x-0 
          z-20 flex items-center justify-center gap-3
        "
      >
        <img
          src={mzaLogo}
          alt="Visitour Media Logo"
          className="object-contain"
          style={{ height: "100px", width: "auto" }}
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-48 sm:mt-0">
        <h1
          data-aos="zoom-out-down"
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Amplify Your Brand
        </h1>
        <p
          data-aos="zoom-out-down"
          className="text-xl md:text-2xl mb-8 font-bold leading-relaxed max-w-3xl mx-auto"
        >
          Full-Service Media & Marketing Solutions
        </p>
        <p
          data-aos="zoom-out-down"
          className="text-lg md:text-xl mb-12  text-gray-200 max-w-2xl mx-auto"
        >
          From Strategy to Execution - We Help Businesses Grow Through Powerful
          Content & Digital Marketing
        </p>
        <button
          data-aos="zoom-out-down"
          className="px-8 py-4 rounded-xl text-lg font-bold hover:opacity-90 transition-all duration-300"
          style={{ backgroundColor: "rgb(100, 189, 249)", color: "black" }}
        >
          Get Started
        </button>
      </div>
    </section>
  );
}

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Facebook, Twitter, Instagram, Linkedin, Music2 } from "lucide-react";

export function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-visible">
      <div className="absolute inset-0 bg-black bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-[rgb(100,189,249)]/20"></div>

        <div className="absolute inset-0 overflow-hidden">
          <Facebook className="absolute top-[10%] left-[10%] w-24 h-24 text-[rgb(100,189,249)]/10 -rotate-12" />
          <Twitter className="absolute top-[15%] right-[15%] w-24 h-24 text-[rgb(100,189,249)]/10 rotate-12" />
          <Instagram className="absolute top-[8%] left-[45%] w-20 h-20 text-[rgb(255,255,255)]/10 rotate-6" />

          <Linkedin className="absolute top-[40%] left-[15%] w-24 h-24 text-[rgb(255,255,255)]/10 -rotate-45" />
          <Music2 className="absolute top-[45%] right-[20%] w-28 h-28 text-[rgb(100,189,249)]/10 rotate-3" />
          <Facebook className="absolute top-[50%] left-[50%] w-20 h-20 text-[rgb(100,189,249)]/10 rotate-12" />

          <Instagram className="absolute bottom-[15%] left-[10%] w-24 h-24 text-[rgb(255,255,255)]/10 rotate-45" />
          <Twitter className="absolute bottom-[10%] right-[10%] w-28 h-28 text-[rgb(100,189,249)]/15 -rotate-6" />
          <Linkedin className="absolute bottom-[20%] right-[40%] w-20 h-20 text-[rgb(100,189,249)]/10 rotate-12" />
          <Music2 className="absolute bottom-[5%] left-[40%] w-24 h-24 text-[rgb(255,255,255)]/10 -rotate-12" />
        </div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-48 sm:mt-0">
        <h1
          data-aos="zoom-in-down"
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Amplify Your Brand
        </h1>
        <p
          data-aos="zoom-in-down"
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          style={{
            color: "rgb(100, 189, 249)",
          }}
        >
          Social Media Management Business
        </p>
        <p
          data-aos="zoom-out-down"
          className="text-lg md:text-xl mb-12 text-gray-200 max-w-2xl mx-auto"
        >
          Social media management business focusing on personal branding to help
          clients improve visibility online. Developing a deeper connection
          between a personality and their clients.
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

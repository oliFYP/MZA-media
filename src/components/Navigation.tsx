import { useEffect } from "react";
import mzaLogoB from "../logo/mza.svg";

export function Navigation() {
  useEffect(() => {
    const nav = document.getElementById("main-nav");
    if (nav) {
      nav.classList.add("fade-in-down");
    }
  }, []);

  return (
    <nav
      id="main-nav"
      className="fixed top-0 w-full bg-gradient-to-b from-black/90 to-transparent backdrop-blur-md z-50 shadow-sm opacity-0 translate-y-[-20px]"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img
              src={mzaLogoB}
              alt="Visitour Media Logo"
              className="object-contain"
              style={{ height: "60px" }}
            />
          </div>

          <ul className="hidden md:flex items-center gap-8">
            {["Home", "Services", "About", "Contact Us"].map((text, i) => (
              <li key={i}>
                <a
                  href={`#${text.toLowerCase().replace(" ", "")}`}
                  className="text-white hover:text-[rgb(100,189,249)] font-bold transition-colors"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>

          <button className="md:hidden" aria-label="Toggle menu">
            <span className="text-2xl text-white">☰</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

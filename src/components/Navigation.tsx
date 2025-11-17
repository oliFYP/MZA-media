import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import mzaLogoB from "../logo/mza.svg";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = document.getElementById("main-nav");
    if (nav) {
      nav.classList.add("fade-in-down");
    }

    // Smooth scroll for all anchor links
    const handleClick = (e: Event) => {
      e.preventDefault();
      const anchor = e.currentTarget as HTMLAnchorElement;
      const target = document.querySelector(anchor.getAttribute("href") || "");
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });
    };
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navItems = [
    { text: "Home", href: "#home" },
    { text: "Services", href: "#services" },
    { text: "About", href: "#about" },
    { text: "Contact Us", href: "#contact" },
  ];

  return (
    <nav
      id="main-nav"
      className="fixed top-0 w-full bg-gradient-to-b from-black/90 to-transparent 
                 backdrop-blur-md z-50 shadow-sm opacity-0 translate-y-[-20px]
                 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={mzaLogoB}
              alt="Visitour Media Logo"
              className="object-contain"
              style={{ height: "60px" }}
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  className="text-white font-bold transition-all duration-300 hover:text-[rgb(100,189,249)] relative group"
                >
                  {item.text}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgb(100,189,249)] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Get Started Button (Desktop) */}
          <a
            href="#contact"
            className="hidden md:block px-6 py-2.5 rounded-lg bg-[rgb(100,189,249)] text-black font-bold transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-[0_0_20px_rgba(100,189,249,0.3)]"
          >
            Get Started
          </a>

          {/* Hamburger (Mobile) - Enhanced */}
          <button
            className="md:hidden p-2 text-white focus:outline-none hover:bg-white/10 rounded-lg transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-7 h-7" strokeWidth={2.5} />
            ) : (
              <Menu className="w-7 h-7" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu - Enhanced */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full overflow-hidden 
                    transition-all duration-500 ease-in-out
                    ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-[rgb(100,189,249)]/20 shadow-2xl">
          <div className="flex flex-col py-4 px-4">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-lg font-semibold py-4 px-4 rounded-lg
                          hover:bg-[rgb(100,189,249)]/10 hover:text-[rgb(100,189,249)]
                          transition-all duration-300 border-b border-white/5 last:border-0
                          active:scale-95"
              >
                {item.text}
              </a>
            ))}

            {/* Mobile CTA Button */}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 w-full py-3.5 rounded-lg bg-[rgb(100,189,249)] text-black font-bold
                        transition-all duration-300 hover:opacity-90 active:scale-95
                        shadow-[0_0_20px_rgba(100,189,249,0.4)] text-center block"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

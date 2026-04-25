import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import mzaLogoB from "../logo/mza.svg";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: Event) => {
      e.preventDefault();
      const a = e.currentTarget as HTMLAnchorElement;
      const target = document.querySelector(a.getAttribute("href") || "");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    };
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((l) => l.addEventListener("click", handleClick));
    return () => links.forEach((l) => l.removeEventListener("click", handleClick));
  }, []);

  const navItems = [
    { text: "Home", href: "#home" },
    { text: "Services", href: "#services" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(6,7,15,0.96)" : "transparent",
        borderBottom: scrolled ? "1px solid #1B1E30" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        animation: "navSlideIn 0.7s ease-out forwards",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <img src={mzaLogoB} alt="MZA Media" className="w-auto" style={{ height: "44px" }} />

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className="text-sm font-medium transition-colors duration-300 hover:text-white"
                style={{ color: "#7A85A8", letterSpacing: "0.02em" }}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:opacity-90 hover:scale-105"
          style={{ backgroundColor: "#C4FF47", color: "#06070F" }}
        >
          Get Started
        </a>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          backgroundColor: "rgba(6,7,15,0.98)",
          borderTop: "1px solid #1B1E30",
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-white py-3.5 text-sm font-medium border-b"
              style={{ borderColor: "#1B1E30" }}
            >
              {item.text}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 w-full py-3 rounded-lg text-center text-sm font-semibold"
            style={{ backgroundColor: "#C4FF47", color: "#06070F" }}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

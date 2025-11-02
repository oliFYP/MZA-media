import mzaLogoB from "../logo/mzaB.svg";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
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
            <li>
              <a
                href="#home"
                className="text-gray-700 hover:text-gray-900 font-bold transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-700 hover:text-gray-900 font-bold transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 font-bold transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 font-bold transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>

          <button className="md:hidden" aria-label="Toggle menu">
            <span className="text-2xl text-gray-900">☰</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

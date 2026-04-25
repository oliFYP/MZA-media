import { Mail, Phone, MapPin } from "lucide-react";
import mzaLogo from "../logo/mza.svg";

export function Footer() {
  const navLinks = [
    { text: "Home", href: "#home" },
    { text: "Services", href: "#services" },
    { text: "Pricing", href: "#pricing" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "#030408" }}>
      {/* Top divider */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #1B1E30, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img
              src={mzaLogo}
              alt="MZA Media"
              className="w-auto mb-5"
              style={{ height: "48px" }}
            />
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#5A6585" }}
            >
              Professional social media management and media solutions to
              elevate your brand and captivate your audience.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#E4ECF7" }}
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300 hover:text-white"
                    style={{ color: "#5A6585" }}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#E4ECF7" }}
            >
              Contact
            </h3>
            <ul className="space-y-4">
              {[
                { icon: Phone, text: "514-980-1351 | 514-913-4817" },
                { icon: Mail, text: "info@visitour.com" },
                { icon: MapPin, text: "Saint Jean-sur-Richelieu, QC" },
              ].map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Icon
                    size={13}
                    style={{ color: "#64BDF9", flexShrink: 0 }}
                  />
                  <span className="text-sm" style={{ color: "#5A6585" }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid #1B1E30" }}
        >
          <p className="text-xs" style={{ color: "#3D4560" }}>
            © {new Date().getFullYear()} MZA Media. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="text-xs" style={{ color: "#3D4560" }}>
              Made with
            </span>
            <span style={{ color: "#C4FF47", fontSize: "11px" }}>♥</span>
            <span className="text-xs" style={{ color: "#3D4560" }}>
              by Visitour Media
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

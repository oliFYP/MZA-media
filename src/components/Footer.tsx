import { Mail, Phone, MapPin } from "lucide-react";
import mzaLogo from "../logo/mza.svg";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={mzaLogo}
                alt="MZA"
                className="object-contain"
                style={{ height: "100px", width: "auto" }}
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Professional real estate photography and media solutions to
              elevate your listings and captivate buyers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">
                HDR Photography
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                360° Virtual Tours
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Showcase Videos
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Aerial Drone Media
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Virtual Staging
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Property Websites
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>514-980-1351 | 514-913-4817</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@visitour.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Saint Jean-sur-Richelieu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} MZA Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

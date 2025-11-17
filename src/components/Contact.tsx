import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: false,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-black relative text-white overflow-hidden"
    >
      {/* 🌌 ANIMATED PARTICLES BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full bg-gradient-to-b from-black/90 to-black/70"></div>

        {[...Array(30)].map((_, idx) => (
          <div
            key={idx}
            className="absolute w-2 h-2 bg-[rgb(100,189,249)] rounded-full opacity-50 animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}

        <style>{`
          @keyframes pulseSlow {
            0%, 100% { transform: scale(0.5); opacity: 0.3; }
            50% { transform: scale(1.2); opacity: 0.8; }
          }
          .animate-pulse-slow {
            animation: pulseSlow 6s infinite ease-in-out;
          }
        `}</style>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-[rgb(100,189,249)]">Connect</span>
          </h2>
          <p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            Ready to elevate your brand? Get in touch and let's create something
            amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8" data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-[rgb(100,189,249)]/10 border border-[rgb(100,189,249)] group-hover:bg-[rgb(100,189,249)]/20 transition-all duration-300">
                  <Mail className="w-6 h-6 text-[rgb(100,189,249)]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-300">contact@visitourmedia.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-[rgb(100,189,249)]/10 border border-[rgb(100,189,249)] group-hover:bg-[rgb(100,189,249)]/20 transition-all duration-300">
                  <Phone className="w-6 h-6 text-[rgb(100,189,249)]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-[rgb(100,189,249)]/10 border border-[rgb(100,189,249)] group-hover:bg-[rgb(100,189,249)]/20 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-[rgb(100,189,249)]" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-300">Saint-Jean-sur-Richelieu, QC</p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div
              className="mt-12 p-6 rounded-xl bg-[rgb(100,189,249)]/5 border border-[rgb(100,189,249)]/30"
              data-aos="fade-up"
            >
              <h4 className="text-xl font-bold mb-2">Ready to Get Started?</h4>
              <p className="text-gray-300 mb-4">
                Book a free consultation and discover how we can help grow your
                brand.
              </p>
              <button className="px-6 py-2 rounded-lg bg-[rgb(100,189,249)] text-black font-semibold hover:opacity-90 transition-opacity duration-300">
                Schedule a Call
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative" data-aos="fade-left" data-aos-delay="400">
            <div className="space-y-6 p-8 rounded-2xl bg-black/50 backdrop-blur-sm border-2 border-[rgb(100,189,249)] shadow-[0_0_40px_rgba(100,189,249,0.3)]">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/70 border border-gray-700 text-white focus:border-[rgb(100,189,249)] focus:outline-none transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/70 border border-gray-700 text-white focus:border-[rgb(100,189,249)] focus:outline-none transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/70 border border-gray-700 text-white focus:border-[rgb(100,189,249)] focus:outline-none transition-colors duration-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-black/70 border border-gray-700 text-white focus:border-[rgb(100,189,249)] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-4 rounded-lg bg-[rgb(100,189,249)] text-black font-bold text-lg hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(100,189,249,0.4)]"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

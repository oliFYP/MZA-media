import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Contact() {
  useEffect(() => {
    AOS.init({ duration: 700, once: false });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle = {
    backgroundColor: "#080B17",
    border: "1px solid #1B1E30",
    color: "#E4ECF7",
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "var(--font-body)",
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#06070F" }}
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #64BDF9, transparent)",
        }}
      />

      {/* Corner glow — lime */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(ellipse at top right, rgba(196,255,71,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20" data-aos="fade-up">
          <span
            className="text-xs font-medium uppercase block mb-4"
            style={{ color: "#C4FF47", letterSpacing: "0.3em" }}
          >
            Contact
          </span>
          <h2
            className="text-4xl md:text-6xl font-bold leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let's
            <br />
            <span style={{ color: "#64BDF9" }}>Connect</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: info */}
          <div data-aos="fade-right">
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "#5A6585" }}
            >
              Ready to elevate your brand? Get in touch and let's create
              something amazing together.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "contact@visitourmedia.com",
                },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Saint-Jean-sur-Richelieu, QC",
                },
              ].map(({ icon: Icon, label, value }, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "#0D0F1E",
                      border: "1px solid #1B1E30",
                    }}
                  >
                    <Icon size={16} style={{ color: "#64BDF9" }} />
                  </div>
                  <div>
                    <div
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ color: "#3D4560" }}
                    >
                      {label}
                    </div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: "#E4ECF7" }}
                    >
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA box */}
            <div
              className="p-6 rounded-2xl"
              data-aos="fade-up"
              style={{
                backgroundColor: "#0D0F1E",
                border: "1px solid #1B1E30",
              }}
            >
              <h4
                className="text-lg font-bold mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "#E4ECF7",
                }}
              >
                Ready to Get Started?
              </h4>
              <p className="text-sm mb-5" style={{ color: "#5A6585" }}>
                Book a free consultation and discover how we can help grow
                your brand.
              </p>
              <button
                className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: "#C4FF47", color: "#06070F" }}
              >
                Schedule a Call
              </button>
            </div>
          </div>

          {/* Right: form */}
          <div data-aos="fade-left" data-aos-delay="200">
            <div
              className="p-8 rounded-2xl"
              style={{
                backgroundColor: "#0D0F1E",
                border: "1px solid #1B1E30",
              }}
            >
              <div className="space-y-5">
                {[
                  {
                    label: "Full Name",
                    id: "name",
                    type: "text",
                    placeholder: "John Doe",
                  },
                  {
                    label: "Email Address",
                    id: "email",
                    type: "email",
                    placeholder: "john@example.com",
                  },
                  {
                    label: "Phone Number",
                    id: "phone",
                    type: "tel",
                    placeholder: "+1 (555) 123-4567",
                  },
                ].map(({ label, id, type, placeholder }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block text-xs uppercase tracking-wider mb-2"
                      style={{ color: "#5A6585" }}
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      id={id}
                      name={id}
                      value={formData[id as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      style={inputStyle}
                      onFocus={(e) => {
                        (e.target as HTMLInputElement).style.borderColor =
                          "#64BDF9";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLInputElement).style.borderColor =
                          "#1B1E30";
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-wider mb-2"
                    style={{ color: "#5A6585" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project..."
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={(e) => {
                      (e.target as HTMLTextAreaElement).style.borderColor =
                        "#64BDF9";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLTextAreaElement).style.borderColor =
                        "#1B1E30";
                    }}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                  style={{ backgroundColor: "#64BDF9", color: "#06070F" }}
                >
                  Send Message
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

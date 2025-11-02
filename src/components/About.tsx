import { Camera, Plane, Sparkles } from "lucide-react";
import mzaLogo from "../logo/logo.jpg";

const teamMembers = [
  {
    name: "Anthony Alves",
    role: "Founder & CEO",
    icon: Camera,
    bio: "Heyo! I'm Anthony, self-proclaimed entrepreneur and founder of Visitour. I am passionate about all things real estate and especially photography. I picked up an old DSLR back in 2022 and have been obsessed with home photography ever since. My dream is to one day sell the properties I take pictures of!",
    image: mzaLogo,
  },
  {
    name: "Tyler Morin",
    role: "Co-Founder & Creative Director",
    icon: Sparkles,
    bio: "Hi, I'm Tyler Morin, a 22-year-old entrepreneur and one of two founders of Visitour. I studied Entrepreneurship at Champlain College and fell in love with real estate while exploring a career as a real estate agent. My passion for creative media, including graphics and cinematic videos, inspired me to start Visitour, where I showcase properties with stunning visuals.",
    image: mzaLogo,
  },
  {
    name: "Fraid Zada",
    role: "Sales Lead",
    icon: Plane,
    bio: "Yo, I'm Fraid Zada, a professional photographer and drone pilot. I am a self-taught photographer who's comfortable shooting all kinds of subjects. My lengthy career began underwater during my time as a scuba diver. Since then, I have expanded my horizons into landscape, portrait, and even automotive photography! My new obsession is aerial real estate content. My background as an airplane pilot shines through the quality of my work.",
    image: mzaLogo,
  },
];

export function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet The Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The creative minds behind Visitour Media. We're passionate about
            helping businesses grow through innovative media and marketing
            solutions.
          </p>
        </div>

        <div className="space-y-24">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div
                    className="relative h-96 bg-cover bg-center rounded-2xl shadow-2xl overflow-hidden group"
                    style={{ backgroundImage: `url(${member.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon
                      className="w-10 h-10"
                      style={{ color: "rgb(100, 189, 249)" }}
                      strokeWidth={1.5}
                    />
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p
                        className="text-lg font-medium"
                        style={{ color: "rgb(100, 189, 249)" }}
                      >
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help elevate your brand and drive real
              results for your business.
            </p>
            <button
              className="px-10 py-4 rounded-sm text-lg font-medium hover:opacity-90 transition-all duration-300"
              style={{ backgroundColor: "rgb(100, 189, 249)", color: "black" }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

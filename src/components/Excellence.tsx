import { Award, Rocket, ThumbsUp } from "lucide-react";

export function Excellence() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Award
            className="w-16 h-16 mx-auto mb-6"
            style={{ color: "rgb(100, 189, 249)" }}
          />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proud to Deliver Excellence Every Time
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the Visitour Media difference. We're not just a service
            provider—we're your growth partner. Every campaign is crafted with
            precision, creativity, and a commitment to driving measurable
            results for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border-2"
            style={{ borderColor: "rgb(100, 189, 249)" }}
          >
            <Rocket
              className="w-12 h-12 mb-4"
              style={{ color: "rgb(100, 189, 249)" }}
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Fast Turnaround
            </h3>
            <p className="text-lg text-gray-700">
              Quick delivery without sacrificing quality. Most projects
              completed within 5-7 business days.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border-2 border-black">
            <ThumbsUp className="w-12 h-12 mb-4 text-black" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Satisfaction Guaranteed
            </h3>
            <p className="text-lg text-gray-700">
              Unlimited revisions until you're 100% satisfied with the results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

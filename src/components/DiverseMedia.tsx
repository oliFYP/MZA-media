import { Sparkles, Target, LineChart } from "lucide-react";

export function DiverseMedia() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Sparkles
            className="w-16 h-16 mx-auto mb-6"
            style={{ color: "rgb(100, 189, 249)" }}
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Integrated Marketing Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            In today's competitive marketplace, success requires a multi-channel
            approach. By combining strategic content creation, targeted
            advertising, and data-driven insights, we help you reach the right
            audience at the right time with the right message.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          <div
            className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 transition-colors duration-300"
            style={{ borderColor: "rgba(100, 189, 249, 0.2)" }}
          >
            <Target
              className="w-12 h-12 mb-4"
              style={{ color: "rgb(100, 189, 249)" }}
            />
            <h3 className="text-2xl font-bold mb-3">
              Custom Marketing Strategy
            </h3>
            <p className="text-gray-300 mb-4">
              Get a personalized marketing plan tailored to your business goals
              and target audience.
            </p>
            <button
              className="font-medium hover:opacity-80 transition-opacity"
              style={{ color: "rgb(100, 189, 249)" }}
            >
              Learn More →
            </button>
          </div>

          <div
            className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 transition-colors duration-300"
            style={{ borderColor: "rgba(100, 189, 249, 0.2)" }}
          >
            <LineChart
              className="w-12 h-12 mb-4"
              style={{ color: "rgb(100, 189, 249)" }}
            />
            <h3 className="text-2xl font-bold mb-3">Performance Analytics</h3>
            <p className="text-gray-300 mb-4">
              Track your campaign performance with detailed reporting and
              insights.
            </p>
            <p
              className="text-sm font-medium"
              style={{ color: "rgb(100, 189, 249)" }}
            >
              Included with all marketing packages
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div
            className="inline-block p-1 rounded-lg"
            style={{
              background:
                "linear-gradient(to right, rgb(100, 189, 249), rgb(59, 130, 246))",
            }}
          >
            <div className="bg-gray-900 px-8 py-4 rounded-md">
              <p className="text-lg font-medium">
                <span
                  className="font-bold"
                  style={{ color: "rgb(100, 189, 249)" }}
                >
                  Strategy Consultation
                </span>{" "}
                included with every package at no extra cost
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

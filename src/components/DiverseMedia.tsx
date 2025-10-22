import { Sparkles, Globe, Layout } from 'lucide-react';

export function DiverseMedia() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Sparkles className="w-16 h-16 mx-auto mb-6" style={{ color: 'rgb(100, 189, 249)' }} />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Diverse Real Estate Media Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            In today's market, standing out is key to securing prime listings. To achieve this, you need to diversify your showcasing methods. By incorporating various media formats like photography, virtual tours, and video walkthroughs, you increase your chances of being chosen first for listings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 transition-colors duration-300" style={{ borderColor: 'rgba(100, 189, 249, 0.2)' }}>
            <Globe className="w-12 h-12 mb-4" style={{ color: 'rgb(100, 189, 249)' }} />
            <h3 className="text-2xl font-bold mb-3">Single Page Property Website</h3>
            <p className="text-gray-300 mb-4">
              Inquire about getting a website built.
            </p>
            <button className="font-medium hover:opacity-80 transition-opacity" style={{ color: 'rgb(100, 189, 249)' }}>
              Learn More →
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 transition-colors duration-300" style={{ borderColor: 'rgba(100, 189, 249, 0.2)' }}>
            <Layout className="w-12 h-12 mb-4" style={{ color: 'rgb(100, 189, 249)' }} />
            <h3 className="text-2xl font-bold mb-3">2D Floor Plan</h3>
            <p className="text-gray-300 mb-4">
              Included with every photoshoot.
            </p>
            <p className="text-sm font-medium" style={{ color: 'rgb(100, 189, 249)' }}>
              Complimentary with all services
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-1 rounded-lg" style={{ background: 'linear-gradient(to right, rgb(100, 189, 249), rgb(59, 130, 246))' }}>
            <div className="bg-gray-900 px-8 py-4 rounded-md">
              <p className="text-lg font-medium">
                <span className="font-bold" style={{ color: 'rgb(100, 189, 249)' }}>Detailed Floor Plans</span> included with every service at no extra cost
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

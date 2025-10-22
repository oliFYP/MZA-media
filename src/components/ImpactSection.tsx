import { Clock } from 'lucide-react';

export function ImpactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Importance of Professional Real Estate Photography
            </h2>
            <div className="flex items-start gap-4 mb-6">
              <Clock className="w-12 h-12 flex-shrink-0 mt-1" style={{ color: 'rgb(100, 189, 249)' }} />
              <div>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Did you know? An excellent real estate photo can hold a buyer's attention for <span className="font-bold" style={{ color: 'rgb(100, 189, 249)' }}>20 seconds</span>, but without it, it's just <span className="font-bold text-gray-900">2 seconds</span>.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  That's why investing in professional photography is vital for agents looking to stand out. At Visitour, we're experts in creating captivating visuals to showcase your properties and attract more buyers.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div
                className="h-48 bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: 'url(/29c041e2-ba7d-4e27-ab86-21cbac8c779c.JPG)' }}
              ></div>
              <div
                className="h-64 bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: 'url(/29c041e2-ba7d-4e27-ab86-21cbac8c779c.JPG)' }}
              ></div>
            </div>
            <div className="space-y-4 pt-8">
              <div
                className="h-64 bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: 'url(/29c041e2-ba7d-4e27-ab86-21cbac8c779c.JPG)' }}
              ></div>
              <div
                className="h-48 bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: 'url(/29c041e2-ba7d-4e27-ab86-21cbac8c779c.JPG)' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

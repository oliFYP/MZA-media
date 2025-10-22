import { Award, Clock, ThumbsUp } from 'lucide-react';

export function Excellence() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Award className="w-16 h-16 mx-auto mb-6" style={{ color: 'rgb(100, 189, 249)' }} />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proud to Deliver Excellence Every Time
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the difference with our photo shoots! Beyond just sessions, they're a testament to our commitment to building a relationship. We take our work personally, and we guarantee nothing but our best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border-2" style={{ borderColor: 'rgb(100, 189, 249)' }}>
            <Clock className="w-12 h-12 mb-4" style={{ color: 'rgb(100, 189, 249)' }} />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Rapid Delivery
            </h3>
            <p className="text-lg text-gray-700">
              Receive your photos, edited, within 36 hours.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border-2 border-black">
            <ThumbsUp className="w-12 h-12 mb-4 text-black" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Satisfaction Guaranteed
            </h3>
            <p className="text-lg text-gray-700">
              Touch ups and re-shoots included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

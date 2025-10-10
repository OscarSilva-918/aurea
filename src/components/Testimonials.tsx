import { Star } from 'lucide-react';
import { testimonials } from '../data/products';

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros <span className="text-amber-500">Clientes</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-gray-700 font-semibold">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">98%</div>
              <div className="text-gray-700 font-semibold">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">10+</div>
              <div className="text-gray-700 font-semibold">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

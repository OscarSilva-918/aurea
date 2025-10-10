import { Award, Users, Hammer } from 'lucide-react';
import aboutImage from '../img/about-image.jpg'
export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre <span className="text-amber-500">Nosotros</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={aboutImage}
              alt="Taller AUREA"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h3>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              AUREA nació con la visión de crear espacios únicos y funcionales para cada hogar. Con más de 10 años de experiencia en el diseño y fabricación de muebles de melamina, nos hemos consolidado como referentes en calidad y diseño.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Cada proyecto es una oportunidad para combinar innovación, artesanía y atención al detalle. Utilizamos materiales de primera calidad y tecnología de punta para garantizar muebles duraderos que superen tus expectativas.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <Award className="text-amber-600" size={32} />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Calidad Premium</h4>
            <p className="text-gray-600 leading-relaxed">
              Trabajamos con melamina de alta densidad y herrajes de primera línea para garantizar durabilidad y elegancia en cada pieza.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <Users className="text-amber-600" size={32} />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Compromiso</h4>
            <p className="text-gray-600 leading-relaxed">
              Nos comprometemos con cada cliente desde el primer diseño hasta la instalación final, asegurando tu total satisfacción.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <Hammer className="text-amber-600" size={32} />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Diseño Personalizado</h4>
            <p className="text-gray-600 leading-relaxed">
              Cada mueble se diseña a medida según tus necesidades y estilo, aprovechando al máximo cada espacio disponible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

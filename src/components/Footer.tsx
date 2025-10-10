import { Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold text-amber-400">AUREA</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Diseñamos y fabricamos muebles de melamina que transforman tus espacios con calidad y estilo.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-400">Navegación</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#inicio" className="hover:text-amber-400 transition">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-amber-400 transition">Nosotros</a></li>
              <li><a href="#catalogo" className="hover:text-amber-400 transition">Catálogo</a></li>
              <li><a href="#disenos-3d" className="hover:text-amber-400 transition">Diseños 3D</a></li>
              <li><a href="#testimonios" className="hover:text-amber-400 transition">Testimonios</a></li>
              <li><a href="#contacto" className="hover:text-amber-400 transition">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-400">Productos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#catalogo" className="hover:text-amber-400 transition">Cocinas</a></li>
              <li><a href="#catalogo" className="hover:text-amber-400 transition">Placares</a></li>
              <li><a href="#catalogo" className="hover:text-amber-400 transition">Escritorios</a></li>
              <li><a href="#catalogo" className="hover:text-amber-400 transition">Muebles TV</a></li>
              <li><a href="#catalogo" className="hover:text-amber-400 transition">Bibliotecas</a></li>
              <li><a href="#catalogo" className="hover:text-amber-400 transition">Baños</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-400">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Av. Principal 1234</li>
              <li>CABA, Buenos Aires</li>
              <li>Argentina</li>
              <li className="pt-2">
                <a href="tel:+541112345678" className="hover:text-amber-400 transition">
                  +54 9 11 1234-5678
                </a>
              </li>
              <li>
                <a href="mailto:contacto@aureamuebles.com" className="hover:text-amber-400 transition">
                  contacto@aureamuebles.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 AUREA Muebles. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/5491123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

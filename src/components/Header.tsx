import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
              AUREA
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-amber-600 transition">
              Inicio
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="text-gray-700 hover:text-amber-600 transition">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('catalogo')} className="text-gray-700 hover:text-amber-600 transition">
              Catálogo
            </button>
            <button onClick={() => scrollToSection('disenos-3d')} className="text-gray-700 hover:text-amber-600 transition">
              Diseños 3D
            </button>
            <button onClick={() => scrollToSection('testimonios')} className="text-gray-700 hover:text-amber-600 transition">
              Testimonios
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-amber-600 transition">
              Contacto
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-amber-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600">
              Inicio
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('catalogo')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600">
              Catálogo
            </button>
            <button onClick={() => scrollToSection('disenos-3d')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600">
              Diseños 3D
            </button>
            <button onClick={() => scrollToSection('testimonios')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600">
              Testimonios
            </button>
            <button onClick={() => scrollToSection('contacto')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600">
              Contacto
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

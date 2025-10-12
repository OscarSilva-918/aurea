import { useState } from 'react';
import { Search, Download, Ruler } from 'lucide-react';
import { products, categories } from '../data/products';

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalogo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestro <span className="text-amber-500">Catálogo</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre nuestra amplia gama de muebles diseñados para transformar cada espacio de tu hogar
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-xl mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar muebles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const [currentIndex, setCurrentIndex] = useState(0);
            const hasMultipleImages = product.imageUrls.length > 1;
            const goPrev = (e: React.MouseEvent) => {
              e.stopPropagation();
              setCurrentIndex((prev) => (prev === 0 ? product.imageUrls.length - 1 : prev - 1));
            };
            const goNext = (e: React.MouseEvent) => {
              e.stopPropagation();
              setCurrentIndex((prev) => (prev === product.imageUrls.length - 1 ? 0 : prev + 1));
            };
            return (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden flex items-center justify-center">
                  <img
                    src={product.imageUrls[currentIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover transition transform hover:scale-110"
                  />
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={goPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow"
                        aria-label="Anterior"
                      >
                        &#8592;
                      </button>
                      <button
                        onClick={goNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow"
                        aria-label="Siguiente"
                      >
                        &#8594;
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        {product.imageUrls.map((_, idx) => (
                          <span
                            key={idx}
                            className={`inline-block w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-amber-500' : 'bg-gray-300'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center gap-2 text-gray-500 mb-4">
                    <Ruler size={18} />
                    <span className="text-sm">{product.dimensions}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-semibold transition">
                      Consultar
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition">
                      <Download size={20} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron productos que coincidan con tu búsqueda</p>
          </div>
        )}

        <div className="text-center mt-12">
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition inline-flex items-center gap-2">
            <Download size={20} />
            Descargar Catálogo Completo PDF
          </button>
        </div>
      </div>
    </section>
  );
}

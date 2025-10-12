
import { useState } from 'react';
import { Download, Ruler } from 'lucide-react';
import { products } from '../data/products';
import ImageModal from './ImageModal';


interface ProductCardProps {
  product: typeof products[number];
}

export default function ProductCard({ product }: ProductCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const hasMultipleImages = product.imageUrls.length > 1;
  const goPrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? product.imageUrls.length - 1 : prev - 1));
  };
  const goNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === product.imageUrls.length - 1 ? 0 : prev + 1));
  };
  return (
    <>
      <div
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col"
        onClick={() => setModalOpen(true)}
        style={{ cursor: 'pointer' }}
      >
        {/* Imagen y controles */}
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
                onMouseDown={e => e.stopPropagation()}
              >
                &#8592;
              </button>
              <button
                onClick={goNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow"
                aria-label="Siguiente"
                onMouseDown={e => e.stopPropagation()}
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
        {/* Info fuera de la imagen */}
        <div className="p-6 flex flex-col gap-2">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
          <div className="flex items-center gap-2 text-gray-500 mb-4">
            <Ruler size={18} />
            <span className="text-sm">{product.dimensions}</span>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-semibold transition">
              Consultar
            </button>
          </div>
        </div>
      </div>
      <ImageModal
        open={modalOpen}
        images={product.imageUrls}
        currentIndex={currentIndex}
        alt={product.name}
        onClose={() => setModalOpen(false)}
        onPrev={goPrev}
        onNext={goNext}
        title={product.name}
        description={product.description}
      />
    </>
  );
}


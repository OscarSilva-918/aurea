
import { useState } from 'react';
import { Heart, Share2, Link as LinkIcon } from 'lucide-react';
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
        className="bg-gradient-to-br from-white/60 via-white/40 to-white/30 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col"
        onClick={() => setModalOpen(true)}
        style={{ cursor: 'pointer' }}
      >
        {/* Imagen y controles */}
  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden flex items-center justify-center bg-gray-50">
          <img
            src={product.imageUrls[currentIndex]}
            alt={product.name}
            className="w-full h-full object-contain object-center transform transition-transform duration-300 md:hover:scale-105"
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
          <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
            {product.category}
          </div>

          {/* Logo overlay top-left */}
          <button onClick={(e) => e.stopPropagation()} className="absolute left-3 top-3 p-0.5 rounded-full bg-white/80 shadow" aria-label="Logo">
            <img src="/src/img/logo.jpeg" alt="logo" className="w-8 h-8 object-cover rounded-full" />
          </button>


          {/* Bottom overlay with product name and action icons */}
          <div className="absolute left-0 bottom-0 w-full px-3 py-2 bg-gradient-to-t from-black/45 to-transparent rounded-b-xl flex items-center justify-between gap-2">
            <span className="text-sm text-white font-semibold drop-shadow-sm">{product.name}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); /* like handled inside CardIcons via props? */ }}
                aria-label="Me gusta"
                className="bg-white/95 hover:bg-amber-500 hover:text-white text-gray-700 rounded-full p-2 shadow-lg transition-colors duration-150"
              >
                <Heart size={16} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); /* share fallback */ const url = window.location.href + `#product-${product.id}`; navigator.clipboard?.writeText(url); }}
                aria-label="Compartir"
                className="bg-white/95 hover:bg-amber-500 hover:text-white text-gray-700 rounded-full p-2 shadow-lg transition-colors duration-150"
              >
                <Share2 size={14} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); const url = window.location.href + `#product-${product.id}`; navigator.clipboard?.writeText(url); }}
                aria-label="Copiar enlace"
                className="bg-white/95 hover:bg-amber-500 hover:text-white text-gray-700 rounded-full p-2 shadow-lg transition-colors duration-150"
              >
                <LinkIcon size={14} />
              </button>
            </div>
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

// CardIcons removed — actions moved to bottom overlay


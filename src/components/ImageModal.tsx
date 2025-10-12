
interface ImageModalProps {
  open: boolean;
  images: string[];
  currentIndex: number;
  alt: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  title?: string;
  description?: string;
}

export default function ImageModal({
  open,
  images,
  currentIndex,
  alt,
  onClose,
  onPrev,
  onNext,
  title,
  description, // se ignora
}: ImageModalProps) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#181c2b]/90 via-[#232946]/90 to-[#181c2b]/90 backdrop-blur-lg animate-fadein"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full mx-4 p-0 sm:p-6 bg-gradient-to-br from-white/95 to-gray-100/95 rounded-3xl shadow-2xl border border-gray-200 animate-zoomin flex flex-col items-center"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute -top-4 -right-4 sm:top-4 sm:right-4 bg-white/90 hover:bg-amber-500 hover:text-white text-gray-700 rounded-full p-3 shadow-lg border border-gray-200 transition-colors duration-200 z-10 text-2xl"
          onClick={onClose}
          aria-label="Cerrar"
        >
          &times;
        </button>
        <div className="relative w-full flex items-center justify-center">
          {/* Botón anterior */}
          {images.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); onPrev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-amber-500 hover:text-white text-gray-700 rounded-full p-3 shadow-lg border border-gray-200 transition-colors duration-200 z-10 text-2xl"
              aria-label="Anterior"
            >
              &#8592;
            </button>
          )}
          <div className="w-full aspect-video max-h-[70vh] flex items-center justify-center rounded-xl overflow-hidden relative bg-black/70">
            <img
              src={images[currentIndex]}
              alt={alt}
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 drop-shadow-2xl bg-black/70"
              style={{ background: 'transparent' }}
            />
          </div>
          {/* Botón siguiente */}
          {images.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); onNext(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-amber-500 hover:text-white text-gray-700 rounded-full p-3 shadow-lg border border-gray-200 transition-colors duration-200 z-10 text-2xl"
              aria-label="Siguiente"
            >
              &#8594;
            </button>
          )}
        </div>
        {/* Indicadores de imagen */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-4 mb-2">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`inline-block w-3 h-3 rounded-full border border-amber-500 ${idx === currentIndex ? 'bg-amber-500' : 'bg-white'}`}
              />
            ))}
          </div>
        )}
        {/* Solo título, sin descripción */}
        {title && (
          <div className="w-full text-center mt-2 mb-1 px-2">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-1 drop-shadow-lg">{title}</h3>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadein { animation: fadein 0.25s ease; }
        @keyframes zoomin {
          from { transform: scale(0.95); opacity: 0.7; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-zoomin { animation: zoomin 0.25s cubic-bezier(.4,2,.6,1); }
      `}</style>
    </div>
  );
}

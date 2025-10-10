import { useState } from 'react';
import { beforeAfterProjects } from '../data/products';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [currentProject, setCurrentProject] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const project = beforeAfterProjects[currentProject];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Antes y <span className="text-amber-400">Después</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Descubre la transformación real de espacios con nuestros muebles
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <div
            className="relative h-96 rounded-xl overflow-hidden shadow-2xl cursor-ew-resize"
            onMouseMove={handleMouseMove}
          >
            <img
              src={project.afterImage}
              alt="Después"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={project.beforeImage}
                alt="Antes"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-1 h-4 bg-gray-400"></div>
                  <div className="w-1 h-4 bg-gray-400"></div>
                </div>
              </div>
            </div>

            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold">
              ANTES
            </div>
            <div className="absolute top-4 right-4 bg-amber-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold">
              DESPUÉS
            </div>
          </div>

          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {beforeAfterProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition ${
                  currentProject === index ? 'bg-amber-500 w-8' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Calculator, Info } from 'lucide-react';

export default function BudgetCalculator() {
  const [dimensions, setDimensions] = useState({ width: '', height: '', depth: '' });
  const [material, setMaterial] = useState('estandar');
  const [estimate, setEstimate] = useState<number | null>(null);

  const materials = {
    estandar: { name: 'Melamina Estándar', pricePerM2: 120 },
    premium: { name: 'Melamina Premium', pricePerM2: 180 },
    luxury: { name: 'Melamina Luxury', pricePerM2: 250 },
  };

  const calculateEstimate = () => {
    const w = parseFloat(dimensions.width);
    const h = parseFloat(dimensions.height);
    const d = parseFloat(dimensions.depth);

    if (w && h && d) {
      const area = ((w * h) + (w * d) + (h * d)) * 2 / 10000;
      const materialCost = area * materials[material as keyof typeof materials].pricePerM2;
      const totalEstimate = materialCost * 1.5;
      setEstimate(Math.round(totalEstimate));
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Calculadora de <span className="text-amber-500">Presupuesto</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg">
            Obtén una estimación rápida del costo de tu mueble
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Ancho (cm)</label>
              <input
                type="number"
                value={dimensions.width}
                onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none"
                placeholder="200"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Alto (cm)</label>
              <input
                type="number"
                value={dimensions.height}
                onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none"
                placeholder="250"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Profundidad (cm)</label>
              <input
                type="number"
                value={dimensions.depth}
                onChange={(e) => setDimensions({ ...dimensions, depth: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none"
                placeholder="60"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Tipo de Material</label>
            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none"
            >
              {Object.entries(materials).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.name} - ${value.pricePerM2}/m²
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={calculateEstimate}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-lg font-semibold text-lg transition flex items-center justify-center gap-2"
          >
            <Calculator size={24} />
            Calcular Presupuesto
          </button>

          {estimate !== null && (
            <div className="mt-6 bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-gray-600 mb-2">Estimación aproximada:</div>
              <div className="text-4xl font-bold text-amber-600 mb-2">
                ${estimate.toLocaleString()}
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-500 mt-4 text-left">
                <Info size={16} className="mt-0.5 flex-shrink-0" />
                <p>
                  Este es un presupuesto aproximado. El costo final puede variar según herrajes, acabados especiales y complejidad del diseño. Contactanos para un presupuesto detallado.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

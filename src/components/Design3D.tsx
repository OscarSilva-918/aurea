import { Box, Eye, CheckCircle } from 'lucide-react';

export default function Design3D() {
  return (
    <section id="disenos-3d" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Diseños <span className="text-amber-500">3D Personalizados</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Visualiza tu mueble antes de fabricarlo. Nuestro servicio de renderizado 3D te permite ver cada detalle y hacer ajustes antes de la producción.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Box className="text-amber-600" size={36} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Modelado 3D</h3>
            <p className="text-gray-600">
              Creamos un modelo digital exacto de tu mueble con todas las especificaciones
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="text-amber-600" size={36} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Visualización Realista</h3>
            <p className="text-gray-600">
              Renders fotorrealistas que muestran materiales, texturas y acabados
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-amber-600" size={36} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Aprobación Final</h3>
            <p className="text-gray-600">
              Realiza ajustes y aprueba el diseño antes de iniciar la fabricación
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Render 3D"
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-2">
                Render 3D
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Visualización Digital</h3>
              <p className="text-gray-600">
                Modelo 3D hiperrealista que muestra cada detalle de tu futuro mueble
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Producto Terminado"
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-2">
                Producto Final
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Resultado Real</h3>
              <p className="text-gray-600">
                El mueble fabricado e instalado, fiel al diseño 3D aprobado
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">¿Listo para ver tu mueble antes de fabricarlo?</h3>
          <p className="text-lg mb-6 opacity-90">
            Solicita tu diseño 3D personalizado y toma decisiones con total confianza
          </p>
          <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Solicitar Diseño 3D
          </button>
        </div>
      </div>
    </section>
  );
}

import { Product, Testimonial, BeforeAfter } from '../types';
import img1 from '../img/cocina/img1.jpg';
import img2 from '../img/cocina/img2.jpg';
import img3 from '../img/cocina/img3.jpg';
import img4 from '../img/cocina/img4.jpg';
import img5 from '../img/cocina/img5.jpg';
import img6 from '../img/cocina/img6.jpg';
import img7 from '../img/cocina/img7.jpg';
import img8 from '../img/cocina/img8.jpg';
import img9 from '../img/cocina/img9.jpg';
import img10 from '../img/cocina/img10.jpg';
import img11 from '../img/cocina/img11.jpg';
import img12 from '../img/cocina/img12.jpg';
import img13 from '../img/cocina/img13.jpg';
import img14 from '../img/cocina/img14.jpg';
import img15 from '../img/cocina/img15.jpg';
import img16 from '../img/cocina/img16.jpg';
import img17 from '../img/cocina/img17.jpg';
import img18 from '../img/cocina/img18.jpg';
import img19 from '../img/cocina/img19.jpg';
import img20 from '../img/cocina/img20.jpg';
import img21 from '../img/cocina/img21.jpg';



export const products: Product[] = [
  {
    id: '100',
    name: 'Cocina Moderna en L',
    category: 'Cocinas',
    description: 'Cocina completa con melamina color helsinky, perfil "C" y herrajes cierre suave.',
    imageUrls: [img1],
    dimensions: '3.00m x 2.40m x 0.60m',
    price: 'Consultar'
  },
  {
    id: '101',
    name: 'Cocina Moderna Blanca',
    category: 'Cocinas',
    description: 'Cocina completa con melamina blanca brillante, tiradores invisibles y encimera de cuarzo.',
    imageUrls: [img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21],
    dimensions: '3.00m x 2.40m x 0.60m',
    price: 'Consultar'
  },
  {
    id: '2',
    name: 'Placard Vestidor Premium',
    category: 'Placares',
    description: 'Vestidor modular con puertas corredizas, estantes ajustables y barras cromadas.',
    imageUrls: ['https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1200'],
    dimensions: '2.50m x 2.60m x 0.60m',
    price: 'Consultar'
  },
  {
    id: '3',
    name: 'Escritorio Home Office',
    category: 'Escritorios',
    description: 'Escritorio minimalista con cajones laterales, ideal para trabajo remoto.',
    imageUrls: ['https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1200'],
    dimensions: '1.60m x 0.75m x 0.60m',
    price: 'Consultar'
  },
  {
    id: '4',
    name: 'Mueble TV Flotante',
    category: 'Muebles TV',
    description: 'Mueble suspendido con compartimentos cerrados y estantes de vidrio templado.',
    imageUrls: ['https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200'],
    dimensions: '2.00m x 1.80m x 0.40m',
    price: 'Consultar'
  },
  {
    id: '5',
    name: 'Biblioteca Modular',
    category: 'Bibliotecas',
    description: 'Sistema de estanterías modulares con puertas y nichos decorativos.',
    imageUrls: ['https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1200'],
    dimensions: '2.40m x 2.20m x 0.35m',
    price: 'Consultar'
  },
  {
    id: '6',
    name: 'Mueble Vanitory',
    category: 'Baños',
    description: 'Mueble para baño con mesada, espejo y almacenamiento integrado.',
    imageUrls: [' https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=1200'],
    dimensions: '1.20m x 0.85m x 0.50m',
    price: 'Consultar'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María González',
    comment: 'Excelente trabajo. El placard quedó perfecto y el renderizado 3D me ayudó a visualizar todo antes de fabricarlo.',
    imageUrl: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5
  },
  {
    id: '2',
    name: 'Carlos Méndez',
    comment: 'Muy profesionales. La cocina superó mis expectativas. Cumplieron con los plazos y el presupuesto.',
    imageUrl: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5
  },
  {
    id: '3',
    name: 'Ana Rodríguez',
    comment: 'Amo mi nuevo escritorio. Perfecto para trabajar desde casa. Muy buena calidad de materiales.',
    imageUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5
  }
];

export const beforeAfterProjects: BeforeAfter[] = [
  {
    id: '1',
    title: 'Renovación Cocina',
    beforeImage: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Transformación completa de cocina antigua a diseño moderno'
  },
  {
    id: '2',
    title: 'Dormitorio Principal',
    beforeImage: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Instalación de vestidor completo con optimización de espacio'
  }
];

export const categories = [
  'Todos',
  'Cocinas',
  'Placares',
  'Escritorios',
  'Muebles TV',
  'Bibliotecas',
  'Baños'
];

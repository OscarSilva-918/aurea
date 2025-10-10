import { Product, Testimonial, BeforeAfter } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Cocina Moderna Blanca',
    category: 'Cocinas',
    description: 'Cocina completa con melamina blanca brillante, tiradores invisibles y encimera de cuarzo.',
    imageUrl: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200',
    dimensions: '3.00m x 2.40m x 0.60m',
    price: 'Consultar'
  },
  {
    id: '2',
    name: 'Placard Vestidor Premium',
    category: 'Placares',
    description: 'Vestidor modular con puertas corredizas, estantes ajustables y barras cromadas.',
    imageUrl: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1200',
    dimensions: '2.50m x 2.60m x 0.60m',
    price: 'Consultar'
  },
  {
    id: '3',
    name: 'Escritorio Home Office',
    category: 'Escritorios',
    description: 'Escritorio minimalista con cajones laterales, ideal para trabajo remoto.',
    imageUrl: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1200',
    dimensions: '1.60m x 0.75m x 0.60m',
    price: 'Consultar'
  },
  {
    id: '4',
    name: 'Mueble TV Flotante',
    category: 'Muebles TV',
    description: 'Mueble suspendido con compartimentos cerrados y estantes de vidrio templado.',
    imageUrl: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200',
    dimensions: '2.00m x 1.80m x 0.40m',
    price: 'Consultar'
  },
  {
    id: '5',
    name: 'Biblioteca Modular',
    category: 'Bibliotecas',
    description: 'Sistema de estanterías modulares con puertas y nichos decorativos.',
    imageUrl: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1200',
    dimensions: '2.40m x 2.20m x 0.35m',
    price: 'Consultar'
  },
  {
    id: '6',
    name: 'Mueble Vanitory',
    category: 'Baños',
    description: 'Mueble para baño con mesada, espejo y almacenamiento integrado.',
    imageUrl: ' https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=1200',
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

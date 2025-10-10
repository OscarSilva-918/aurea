export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  dimensions: string;
  price?: string;
  technicalSheet?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  imageUrl: string;
  rating: number;
}

export interface BeforeAfter {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export interface ContactForm {
  name: string;
  whatsapp: string;
  email: string;
  furnitureType: string;
  message: string;
}

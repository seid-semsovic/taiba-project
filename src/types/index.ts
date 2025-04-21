// Type definitions for the application

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'dessert' | 'main' | 'breakfast' | 'pizza' | 'other';
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'ambiance' | 'food' | 'customers';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  subCategory?: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  description: string;
  features?: string[];
  material?: string;
  weight?: string;
  dimensions?: string;
  stockStatus: 'in-stock' | 'low-stock' | 'out-of-stock';
  isNew?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
  rating?: number;
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  description?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

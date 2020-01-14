import { Product } from './Product';

export interface Category {
    name: string;
    description: string;
    products: Product[];
  }
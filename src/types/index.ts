export interface Product {
  id: number;
  name: string;
  price: string;
  priceValue: number;
  category: string;
  image: string;
  badge?: string;
  description: string;
  details: string[];
  sizes: string[];
  colors: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

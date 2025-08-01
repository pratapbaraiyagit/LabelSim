export interface Product {
  id: string;
  name: string;
  description: string;
  price?: string;
  imageUrl: string;
  category: 'stitched' | 'unstitched';
}

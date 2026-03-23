export type ServingType = 'bake-off' | 'ready-to-serve';
export type ProductCategory = 'pizza' | 'bakery' | 'desserts' | 'wellness';

export interface Product {
  id: string;
  name: Record<'hu' | 'en', string>;
  description: Record<'hu' | 'en', string>;
  category: ProductCategory;
  servingType: ServingType[];
  isDiaWellness: boolean;
  weight?: string;
  packaging?: string;
  flavors: Record<'hu' | 'en', string[]>;
}

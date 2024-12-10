import { createContext } from 'react';
import { Product } from 'src/types/product';

export const ProductCardComtext = createContext<Product | undefined>(undefined);

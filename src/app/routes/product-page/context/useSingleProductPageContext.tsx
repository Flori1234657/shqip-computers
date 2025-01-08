import { createContext } from 'react';
import { Product } from 'src/types/product';

export const SingleProductPageContext = createContext<Product | undefined>(
    undefined
);

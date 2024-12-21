import { Product } from 'src/types/product';
import { findAndFilterProducts } from 'src/utils/filterProducts';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface State {
    products: Product[] | null;
    setProducts: (newFetchedProducts: Product[]) => void;
}

const useProductStore = create<State>()(
    devtools((set) => ({
        products: null,
        setProducts: (newFetchedProducts) =>
            set((state) => ({
                products: state.products
                    ? findAndFilterProducts(state.products, newFetchedProducts)
                    : newFetchedProducts,
            })),
    }))
);

export default useProductStore;

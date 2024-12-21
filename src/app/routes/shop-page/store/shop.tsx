import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface State {
    totalProductsCount: number | null;
    currentPage: number;
    setTotalProducts: (count: number) => void;
    setCurrentPage: (page: number) => void;
}

const useShopStore = create<State>()(
    devtools((set) => ({
        totalProductsCount: null,
        currentPage: 1,
        setTotalProducts: (count) => set({ totalProductsCount: count }),
        setCurrentPage: (page) => set({ currentPage: page }),
    }))
);

export default useShopStore;

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface State {
    totalProductsCount: number | null;
    currentPage: number;
    searchValue: null | string;
    setTotalProducts: (count: number) => void;
    setCurrentPage: (page: number) => void;
    setSearchValue: (value: string | null) => void;
}

const useShopStore = create<State>()(
    devtools((set) => ({
        totalProductsCount: null,
        currentPage: 1,
        searchValue: null,
        setTotalProducts: (count) => set({ totalProductsCount: count }),
        setCurrentPage: (page) => set({ currentPage: page }),
        setSearchValue: (value) => set({ searchValue: value }),
    }))
);

export default useShopStore;

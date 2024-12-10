/* eslint-disable @stylistic/js/indent */
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Deal } from '../types/deal';
import { DealProducts } from '../types/dealProducts';
import { Product } from 'src/types/product';

interface Pagination {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
}

interface State {
    deal: Deal | null;
    dealProducts: DealProducts | null;
    setDeal: (deal: Deal) => void;
    setDealProducts: (data: Product[], meta: Pagination) => void;
}

const useDealStore = create<State>()(
    devtools((set) => ({
        deal: null,
        dealProducts: null,
        setDeal: (deal) =>
            set(() => ({
                deal: deal,
            })),
        setDealProducts: (data, meta) =>
            set((state) => ({
                dealProducts: state.dealProducts
                    ? {
                          data: [...state.dealProducts.data, ...data],
                          meta: meta,
                      }
                    : { data, meta },
            })),
    }))
);

export default useDealStore;

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Deal } from '../types/deal';

interface State {
    deal: Deal | null;
    setDeal: (deal: Deal) => void;
}

const useDealStore = create<State>()(
    devtools((set) => ({
        deal: null,
        setDeal: (deal) =>
            set(() => ({
                deal: deal,
            })),
    }))
);

export default useDealStore;

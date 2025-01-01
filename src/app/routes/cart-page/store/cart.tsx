import { create } from 'zustand';
import { OrderSummary } from '../types/order';
import { devtools } from 'zustand/middleware';

interface Props {
    orderSummary: null | OrderSummary;
    setOrderSummary: (data: OrderSummary) => void;
}

const useCartPageStore = create<Props>()(
    devtools((set) => ({
        orderSummary: null,
        setOrderSummary: (data) => set(() => ({ orderSummary: data })),
    }))
);

export default useCartPageStore;

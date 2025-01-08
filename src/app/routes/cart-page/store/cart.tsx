import { create } from 'zustand';
import { OrderSummary } from '../types/order';
import { devtools } from 'zustand/middleware';

interface Props {
    orderSummary: null | OrderSummary;
    isOrderSuccessfull?: boolean;
    setOrderSummary: (data: OrderSummary) => void;
    setIsOrderSuccessfull: (state: boolean) => void;
}

const useCartPageStore = create<Props>()(
    devtools((set) => ({
        orderSummary: null,
        setOrderSummary: (data) => set(() => ({ orderSummary: data })),
        setIsOrderSuccessfull: (state: boolean) =>
            set(() => ({ isOrderSuccessfull: state })),
    }))
);

export default useCartPageStore;

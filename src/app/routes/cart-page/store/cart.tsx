import { create } from 'zustand';
import { OrderSummary, ShippingAddress } from '../types/order';
import { devtools, persist } from 'zustand/middleware';

interface Props {
    shippingAddress: null | ShippingAddress;
    orderSummary: null | OrderSummary;
    setShippingAddress: (address: ShippingAddress) => void;
    setOrderSummary: (data: OrderSummary) => void;
}

const useCartPageStore = create<Props>()(
    devtools(
        persist(
            (set) => ({
                shippingAddress: null,
                orderSummary: null,
                setShippingAddress: (address) =>
                    set(() => ({
                        shippingAddress: address,
                    })),
                setOrderSummary: (data) => set(() => ({ orderSummary: data })),
            }),
            { name: 'order-details' }
        )
    )
);

export default useCartPageStore;

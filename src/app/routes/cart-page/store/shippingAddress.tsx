import { create } from 'zustand';
import { ShippingAddress, ShippingPrice } from '../types/order';
import { devtools, persist } from 'zustand/middleware';

interface Props {
    shippingAddress: null | ShippingAddress;
    shippingPrices: null | ShippingPrice[];
    setShippingAddress: (address: ShippingAddress) => void;
    setShippingPrices: (place: ShippingPrice) => void;
}

const useShippingAddressStore = create<Props>()(
    devtools(
        persist(
            (set) => ({
                shippingAddress: null,
                shippingPrices: null,
                setShippingAddress: (address) =>
                    set(() => ({
                        shippingAddress: address,
                    })),
                setShippingPrices: (place) =>
                    set((state) => ({
                        shippingPrices: state.shippingPrices
                            ? [...state.shippingPrices, place]
                            : [place],
                    })),
            }),
            { name: 'shipping-address' }
        )
    )
);

export default useShippingAddressStore;

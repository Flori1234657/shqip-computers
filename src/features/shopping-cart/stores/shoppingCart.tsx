import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { CartState } from '../types/store';
import { decrementCartItem } from '../utils/decrementCartItems';
import { addCartItem } from '../utils/addCartItems';

const useCartStore = create<CartState>()(
    devtools(
        persist(
            (set) => ({
                showEmptyCartMessage: false,
                cartItems: null,
                toggleShowEmptyCartMessage: (value) =>
                    set(() => ({ showEmptyCartMessage: value })),
                setCartItems: (item) =>
                    set((state) => addCartItem(state, item)),
                decrementCartItems: (id) =>
                    set((state) => decrementCartItem(state, id)),
                emptyTheCart: () => set(() => ({ cartItems: null })),
            }),
            { name: 'shopping-cart' }
        )
    )
);

export default useCartStore;

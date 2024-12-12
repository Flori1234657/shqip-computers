import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CartState } from '../types/store';
import { decrementCartItem } from '../utils/decrementCartItems';
import { addCartItem } from '../utils/addCartItems';

const useCartStore = create<CartState>()(
    devtools((set) => ({
        showEmptyCartMessage: false,
        cartItems: null,
        toggleShowEmptyCartMessage: (value) =>
            set(() => ({ showEmptyCartMessage: value })),
        setCartItems: (item) => set((state) => addCartItem(state, item)),
        decrementCartItems: (id) =>
            set((state) => decrementCartItem(state, id)),
    }))
);

export default useCartStore;

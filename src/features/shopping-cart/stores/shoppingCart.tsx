import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface CartState {
    showEmptyCartMessage: boolean | 'dont-show-again';
    toggleShowEmptyCartMessage: (value: boolean | 'dont-show-again') => void;
}

const useCartStore = create<CartState>()(
    devtools((set) => ({
        showEmptyCartMessage: false,
        toggleShowEmptyCartMessage: (value) =>
            set(() => ({ showEmptyCartMessage: value })),
    }))
);

export default useCartStore;

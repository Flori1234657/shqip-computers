import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface CartState {
    isVisible: boolean;
    showEmptyCartMessage: boolean | 'dont-show-again';
    toggleIsVisible: () => void;
    toggleShowEmptyCartMessage: (value: boolean | 'dont-show-again') => void;
}

const useCartStore = create<CartState>()(
    devtools((set) => ({
        isVisible: false,
        showEmptyCartMessage: false,
        toggleIsVisible: () =>
            set((state) => ({ isVisible: !state.isVisible })),
        toggleShowEmptyCartMessage: (value) =>
            set(() => ({ showEmptyCartMessage: value })),
    }))
);

export default useCartStore;

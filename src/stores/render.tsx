/**
    This store is for showing and hiding
    different components that appear on
    top of the pages globaly
 */

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface VisibilityState {
    isShoppingCartVisible: boolean;
    toggleIsShoppingCartVisible: () => void;
}

const useRenderStore = create<VisibilityState>()(
    devtools((set) => ({
        isShoppingCartVisible: false,
        toggleIsShoppingCartVisible: () =>
            set((state) => ({
                isShoppingCartVisible: !state.isShoppingCartVisible,
            })),
    }))
);

export default useRenderStore;

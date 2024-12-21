import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface State {
    productsSectionComponent: 'product-cards' | 'loader' | 'feedback-message';
    setProductsSectionComponent: (
        component: 'product-cards' | 'loader' | 'feedback-message'
    ) => void;
}

const useUiStore = create<State>()(
    devtools((set) => ({
        productsSectionComponent: 'loader',
        setProductsSectionComponent: (component) =>
            set(() => ({
                productsSectionComponent: component,
            })),
    }))
);

export default useUiStore;

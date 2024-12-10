import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface State {
    selectedProduct: string | undefined;
    setSelectedProduct: (id: string) => void;
}

const useSelectProductStore = create<State>()(
    devtools((set) => ({
        selectedProduct: undefined,
        setSelectedProduct: (id) =>
            set(() => ({
                selectedProduct: id,
            })),
    }))
);

export default useSelectProductStore;

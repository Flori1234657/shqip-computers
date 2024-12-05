import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UiState {
    showDeleteItemConfiramtionModal: {
        modal: boolean | 'dont-show-again';
        itemToDelete?: string;
    };
    showDiscountModal: boolean;
    toggleShowDeleteItemConfiramtionModal: (
        value: boolean | 'dont-show-again',
        itemToDelete: string
    ) => void;
    toggleShowDiscountModal: () => void;
}

const useUiStore = create<UiState>()(
    devtools((set) => ({
        showDeleteItemConfiramtionModal: { modal: false },
        showDiscountModal: false,
        toggleShowDeleteItemConfiramtionModal: (value, itemToDelete) =>
            set(() => ({
                showDeleteItemConfiramtionModal: { modal: value, itemToDelete },
            })),
        toggleShowDiscountModal: () =>
            set((state) => ({ showDiscountModal: !state.showDiscountModal })),
    }))
);

export default useUiStore;

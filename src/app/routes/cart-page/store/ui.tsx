import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UiState {
    showDeleteItemConfiramtionModal: {
        modal: boolean | 'dont-show-again';
        itemToDelete?: string;
    };
    showDiscountModal: boolean;
    showShippingAddressModal: boolean;
    toggleShowDeleteItemConfiramtionModal: (
        value: boolean | 'dont-show-again',
        itemToDelete: string
    ) => void;
    toggleShowDiscountModal: () => void;
    toggleShippingAddressModal: () => void;
}

const useUiStore = create<UiState>()(
    devtools((set) => ({
        showDeleteItemConfiramtionModal: { modal: false },
        showDiscountModal: false,
        showShippingAddressModal: false,
        toggleShowDeleteItemConfiramtionModal: (value, itemToDelete) =>
            set(() => ({
                showDeleteItemConfiramtionModal: { modal: value, itemToDelete },
            })),
        toggleShowDiscountModal: () =>
            set((state) => ({ showDiscountModal: !state.showDiscountModal })),
        toggleShippingAddressModal: () =>
            set((state) => ({
                showShippingAddressModal: !state.showShippingAddressModal,
            })),
    }))
);

export default useUiStore;

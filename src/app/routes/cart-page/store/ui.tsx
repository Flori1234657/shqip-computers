import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UiState {
    showDeleteItemConfiramtionModal: {
        modal: boolean | 'dont-show-again';
        itemToDeleteName?: string;
        itemToDeleteId?: string;
    };
    showDiscountModal: boolean;
    showShippingAddressModal: boolean;
    toggleShowDeleteItemConfiramtionModal: (
        value: boolean | 'dont-show-again',
        itemToDeleteName?: string,
        itemToDeleteId?: string
    ) => void;
    toggleShowDiscountModal: () => void;
    toggleShippingAddressModal: () => void;
}

const useUiStore = create<UiState>()(
    devtools((set) => ({
        showDeleteItemConfiramtionModal: { modal: false },
        showDiscountModal: false,
        showShippingAddressModal: false,
        toggleShowDeleteItemConfiramtionModal: (
            value,
            itemToDeleteName,
            itemToDeleteId
        ) =>
            set(() => ({
                showDeleteItemConfiramtionModal: {
                    modal: value,
                    itemToDeleteName,
                    itemToDeleteId,
                },
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

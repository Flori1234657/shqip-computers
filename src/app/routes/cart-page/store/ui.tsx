import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UiState {
    showDeleteItemConfiramtionModal: {
        modal: boolean | 'dont-show-again';
        itemToDelete?: string;
    };
    toggleShowDeleteItemConfiramtionModal: (
        value: boolean | 'dont-show-again',
        itemToDelete: string
    ) => void;
}

const useUiStore = create<UiState>()(
    devtools((set) => ({
        showDeleteItemConfiramtionModal: { modal: false },
        toggleShowDeleteItemConfiramtionModal: (value, itemToDelete) =>
            set(() => ({
                showDeleteItemConfiramtionModal: { modal: value, itemToDelete },
            })),
    }))
);

export default useUiStore;

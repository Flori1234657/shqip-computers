/**
    This store is for showing and hiding
    different components that appear on
    top of the pages globaly
 */

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface VisibilityState {
    isShoppingCartVisible: boolean;
    isAlertFeedbackVisible: boolean;
    isSimpleAlertFeedbackVisible: boolean;
    toggleIsShoppingCartVisible: () => void;
    toggleIsAlertFeedbackVisible: () => void;
    toggleIsSimpleAlertFeedbackVisible: () => void;
}

const useRenderStore = create<VisibilityState>()(
    devtools((set) => ({
        isShoppingCartVisible: false,
        isAlertFeedbackVisible: false,
        isSimpleAlertFeedbackVisible: false,
        toggleIsShoppingCartVisible: () =>
            set((state) => ({
                isShoppingCartVisible: !state.isShoppingCartVisible,
            })),
        toggleIsAlertFeedbackVisible: () =>
            set((state) => ({
                isAlertFeedbackVisible: !state.isAlertFeedbackVisible,
            })),
        toggleIsSimpleAlertFeedbackVisible: () =>
            set((state) => ({
                isSimpleAlertFeedbackVisible:
                    !state.isSimpleAlertFeedbackVisible,
            })),
    }))
);

export default useRenderStore;

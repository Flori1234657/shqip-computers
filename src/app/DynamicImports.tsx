import { AnimatePresence } from 'motion/react';
import { lazy, Suspense } from 'react';
import useRenderStore from 'src/stores/render';

const ShoppingCart = lazy(
    () => import('src/features/shopping-cart/ShoppingCart')
);
const AlertFeedback = lazy(
    () => import('src/features/alert-feedback/AlertFeedback')
);
const SimpleAlertFeedback = lazy(
    () => import('src/features/alert-feedback-simple/SimpleAlertFeedback')
);

export default function DynamicImports() {
    const {
        isShoppingCartVisible,
        isAlertFeedbackVisible,
        isSimpleAlertFeedbackVisible,
    } = useRenderStore();

    return (
        <Suspense fallback=''>
            <AnimatePresence>
                {isShoppingCartVisible ? <ShoppingCart /> : ''}
                {isAlertFeedbackVisible ? <AlertFeedback /> : ''}
                {isSimpleAlertFeedbackVisible ? <SimpleAlertFeedback /> : ''}
            </AnimatePresence>
        </Suspense>
    );
}

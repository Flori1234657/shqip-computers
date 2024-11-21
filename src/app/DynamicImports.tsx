import { lazy, Suspense } from 'react';
import useRenderStore from 'src/stores/render';

const ShoppingCart = lazy(
    () => import('src/features/shopping-cart/ShoppingCart')
);
const AlertFeedback = lazy(
    () => import('src/features/alert-feedback/AlertFeedback')
);

export default function DynamicImports() {
    const { isShoppingCartVisible, isAlertFeedbackVisible } = useRenderStore();

    return (
        <Suspense fallback=''>
            {isShoppingCartVisible ? <ShoppingCart /> : ''}
            {isAlertFeedbackVisible ? <AlertFeedback /> : ''}
        </Suspense>
    );
}

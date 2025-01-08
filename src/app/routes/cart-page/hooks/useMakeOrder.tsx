import useCartStore from 'src/features/shopping-cart/stores/shoppingCart';
import { createOrder } from '../api/orderProcess';
import useCartPageStore from '../store/cart';
import useShippingAddressStore from '../store/shippingAddress';
import { useState } from 'react';
import useSimpleAlertStore from 'src/features/alert-feedback-simple/store/simpleAlert';
import useRenderStore from 'src/stores/render';

export default function useMakeOrder() {
    const { shippingAddress } = useShippingAddressStore();
    const { cartItems } = useCartStore();
    const { orderSummary, setIsOrderSuccessfull } = useCartPageStore();

    const { setData: setAlertData } = useSimpleAlertStore();
    const { toggleIsSimpleAlertFeedbackVisible: showAlert } = useRenderStore();

    const [isLoading, setIsLoading] = useState(false);

    const makeOrder = async (signal: AbortSignal) => {
        setIsLoading(true);

        const response = await createOrder(
            shippingAddress!,
            cartItems!.map((cartItem) => cartItem.item.id),
            orderSummary!,
            signal
        );

        setIsLoading(false);

        if (response === 'Created') {
            setIsOrderSuccessfull(true);
            return;
        }

        setAlertData('danger', 'Your order request failed!');
        showAlert();
    };

    return { makeOrder, isLoading };
}

import useCartPageStore from '../store/cart';
import useCartStore from 'src/features/shopping-cart/stores/shoppingCart';
import {
    getDiscount,
    getShippingFees,
    getSubtotal,
} from '../utils/order-summary';
import useDealStore from '../../home-page/store/deal';
import useShippingAddressStore from '../store/shippingAddress';

export default function useOrderSummary() {
    const { setOrderSummary } = useCartPageStore();
    const { shippingAddress, shippingPrices } = useShippingAddressStore();
    const { cartItems } = useCartStore();
    const { deal } = useDealStore();

    const getAndSetOrderDetails = () => {
        const subtotoal = getSubtotal(cartItems!);
        const discount = deal?.percentage
            ? getDiscount(cartItems!, deal.percentage)
            : 0;
        const shippingFees = !shippingAddress
            ? 0
            : getShippingFees(shippingAddress, shippingPrices!);

        setOrderSummary({
            subtotal: subtotoal,
            shippingFees: shippingFees,
            discount: discount,
        });
    };

    return { getAndSetOrderDetails };
}

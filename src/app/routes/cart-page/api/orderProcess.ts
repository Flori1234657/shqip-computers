import axios from 'axios';
import { throwError } from 'src/utils/throwError';
import { OrderSummary, ShippingAddress } from '../types/order';

export const createOrder = async (
    shippingAddress: ShippingAddress,
    products: number[],
    orederSummary: OrderSummary,
    signal: AbortSignal
) => {
    const totalPrice =
        orederSummary.subtotal +
        orederSummary.shippingFees -
        orederSummary.discount;

    const request = await axios
        .post(
            `${import.meta.env.VITE_REACT_APP_BACKEND}api/orders`,
            {
                data: {
                    fullName: shippingAddress.fullName,
                    products,
                    totalPrice,
                    shippingAddress: shippingAddress,
                },
            },
            { signal }
        )
        .then((res) => res.statusText)
        .catch((error) => throwError(error));

    return request;
};

import { CartItem } from 'src/features/shopping-cart/types/store';
import { ShippingAddress } from '../types/order';

export const getSubtotal = (cartItems: CartItem[]) => {
    let subtotal = 0;

    cartItems.forEach((cartItem) => {
        if (cartItem.quantity > 1)
            subtotal += cartItem.item.defaultPrice * cartItem.quantity;
        subtotal += cartItem.item.defaultPrice;
    });

    return subtotal;
};

export const getDiscount = (cartItems: CartItem[], dealPercentage: number) => {
    let discount = 0;

    cartItems.forEach((cartItem) => {
        if (cartItem.item.discount && !cartItem.item.dealSection)
            // this comparision is not strictly nesseccary because in the server we do not set in one product data both discount and deal section
            discount += cartItem.item.discount;
        if (cartItem.item.dealSection && !cartItem.item.discount)
            discount += (dealPercentage / 100) * cartItem.item.defaultPrice;
    });

    return discount;
};

export const getShippingFees = (shippingAddress: ShippingAddress) => {
    // suppose we have the data of shipping fees based on zip code
    const shipingFees = [
        {
            zip: 9706,
            fee: 30,
        },
        {
            zip: 9707,
            fee: 35,
        },
        {
            zip: 9708,
            fee: 40,
        },
    ];

    /**
       Do a server request to get
       the data of shipping cost based
       on the zip code

     */

    const shippingFee = shipingFees.filter(
        (place) => place.zip === shippingAddress.postalCode
    );

    return shippingFee[0].fee;
};

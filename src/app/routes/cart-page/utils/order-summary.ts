import { CartItem } from 'src/features/shopping-cart/types/store';
import { ShippingAddress, ShippingPrice } from '../types/order';

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

export const getShippingFees = (
    shippingAddres: ShippingAddress,
    shippingPlaces: ShippingPrice[]
) => {
    const shippingPrice = shippingPlaces
        .find((place) => place.countryName === shippingAddres.country)
        ?.states.find((state) => state.name === shippingAddres.state)
        ?.cities.find((city) => city.name === shippingAddres.city)
        ?.posts.find((post) => post.zip === shippingAddres.postalCode)?.price;

    return shippingPrice ? shippingPrice : 0;
};

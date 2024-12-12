import { Product } from 'src/types/product';
import { CartState } from '../types/store';

export const addCartItem = (state: CartState, item: Product) => {
    if (!state.cartItems || state.cartItems.length === 0)
        return { cartItems: [{ item, quantity: 1 }] };

    let sameItemFound = false;
    const newElements = state.cartItems.map((cartItem) => {
        if (cartItem.item.documentId === item.documentId) {
            sameItemFound = true;

            return { item, quantity: cartItem.quantity + 1 };
        }

        return cartItem;
    });

    if (sameItemFound) return { cartItems: newElements };
    return { cartItems: [...newElements, { item, quantity: 1 }] };
};

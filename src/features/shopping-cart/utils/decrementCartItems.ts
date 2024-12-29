import { CartItem, CartState } from '../types/store';

export const decrementCartItem = (
    state: CartState,
    id: string,
    removeFromTheList?: boolean
) => {
    const newElements: CartItem[] = [];

    state.cartItems!.forEach((cartItem) => {
        if (cartItem.item.documentId === id && removeFromTheList) return;

        if (cartItem.item.documentId === id && cartItem.quantity === 1) return;

        if (cartItem.item.documentId === id && cartItem.quantity > 1) {
            newElements.push({
                item: cartItem.item,
                quantity: cartItem.quantity - 1,
            });
            return;
        }

        newElements.push(cartItem);
    });

    return { cartItems: newElements };
};

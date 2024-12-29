import { Product } from 'src/types/product';

export type CartItem = {
    item: Product;
    quantity: number;
};

export type CartState = {
    cartItems: CartItem[] | null;
    showEmptyCartMessage: boolean | 'dont-show-again';
    toggleShowEmptyCartMessage: (value: boolean | 'dont-show-again') => void;
    setCartItems: (item: Product) => void; // the set function includes the increment functionality also
    decrementCartItems: (id: string, removeFromTheList?: boolean) => void;
    emptyTheCart: () => void;
};

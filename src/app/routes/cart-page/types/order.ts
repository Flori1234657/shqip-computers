export type ShippingAddress = {
    fullName: string;
    houseNumber: number;
    phoneNumber: number;
    email: string;
    streetName: string;
    country: string;
    state: string;
    city: string;
    postalCode: number;
};

export type OrderSummary = {
    subtotal: number;
    shippingFees: number;
    discount: number;
};

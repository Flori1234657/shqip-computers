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

export type ShippingPrice = {
    countryName: string;
    states: {
        name: string;
        cities: {
            name: string;
            posts: {
                zip: number;
                price: number;
            }[];
        }[];
    }[];
};

export type OrderSummary = {
    subtotal: number;
    shippingFees: number;
    discount: number;
};

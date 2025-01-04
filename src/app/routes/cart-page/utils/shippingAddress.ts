import { ShippingPrice } from '../types/order';

export const filterDuplicatedShippingPlaces = (
    oldPlaces: ShippingPrice[],
    newPlace: ShippingPrice
) => {
    const newArray = oldPlaces.filter(
        (place) => place.countryName !== newPlace.countryName
    );

    return [...newArray, newPlace];
};

export const filterShippingStates = (
    shippingPlaces: ShippingPrice[] | null,
    selectedCountry: string
) => {
    if (shippingPlaces && shippingPlaces.length > 0 && selectedCountry !== '') {
        const shippingPlaceData = shippingPlaces.filter(
            (place) => place.countryName === selectedCountry
        );
        console.log(shippingPlaceData);

        if (shippingPlaceData.length > 0)
            return [
                '',
                ...shippingPlaceData[0].states.map((state) => state.name),
            ];
    }

    return [''];
};

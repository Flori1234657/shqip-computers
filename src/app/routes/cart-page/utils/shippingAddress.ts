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

export const filterShippingData = (
    shippingPlaces: ShippingPrice[],
    selectedCountry: string,
    selectedState?: string,
    selectedCity?: string
): string[] => {
    if (shippingPlaces.length === 0 || selectedCountry === '') return [''];

    const countryData = shippingPlaces.find(
        (place) => place.countryName === selectedCountry
    );
    if (!countryData) return [''];

    if (!selectedState) {
        return ['', ...countryData.states.map((state) => state.name)];
    }

    const stateData = countryData.states.find(
        (state) => state.name === selectedState
    );
    if (!stateData) return [''];

    if (!selectedCity) {
        return ['', ...stateData.cities.map((city) => city.name)];
    }

    const cityData = stateData.cities.find(
        (city) => city.name === selectedCity
    );
    if (!cityData) return [''];

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return ['', ...cityData.posts.map((post) => post.zip)];
};

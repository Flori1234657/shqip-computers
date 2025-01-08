import axios from 'axios';
import { throwError } from 'src/utils/throwError';
import { ShippingPrice } from '../types/order';

export const getAvailableCountries = async (signal: AbortSignal) => {
    const request: {
        id: number;
        documentId: string;
        countryName: string;
    }[] = await axios
        .get(
            `${import.meta.env.VITE_REACT_APP_BACKEND}api/shipping-prices?fields=countryName`,
            { signal }
        )
        .then((res) => res.data.data)
        .catch((error) => throwError(error));

    return request;
};

export const getAvailableStates = async (
    selectedCountry: string,
    signal: AbortSignal
) => {
    const request: ShippingPrice = await axios
        .get(
            `${import.meta.env.VITE_REACT_APP_BACKEND}api/shipping-prices?filters[countryName][$eq]=${selectedCountry}`,
            { signal }
        )
        .then((res) => res.data.data[0])
        .catch((error) => throwError(error));

    return request;
};

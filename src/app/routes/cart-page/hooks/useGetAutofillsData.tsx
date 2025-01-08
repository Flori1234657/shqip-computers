import { useState } from 'react';
import {
    getAvailableCountries,
    getAvailableStates,
} from '../api/getShippingDetails';
import useShippingAddressStore from '../store/shippingAddress';

export default function useGetAutofillsData() {
    const { setShippingPrices } = useShippingAddressStore();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [availableCountries, setAvailableCountries] = useState<
        null | string[]
    >(null);

    const getAndSetAvailableCountries = async (signal: AbortSignal) => {
        setIsLoading(true);

        const response = await getAvailableCountries(signal);

        setAvailableCountries(response.map((country) => country.countryName));

        setIsLoading(false);
    };

    const getAndSetShippingData = async (
        selectedCountry: string,
        signal: AbortSignal
    ) => {
        setIsLoading(true);

        const response = await getAvailableStates(selectedCountry, signal);

        setShippingPrices(response);

        setIsLoading(false);
    };
    return {
        getAndSetShippingData,
        getAndSetAvailableCountries,
        availableCountries,
        isLoading,
    };
}

/* eslint-disable @stylistic/js/indent */
import { ShippingAddressFields } from './Inputs';

import {
    MdOutlineMap as MapIcon,
    MdMyLocation as StateIcon,
    MdOutlineSignpost as PostalCodeIcon,
} from 'react-icons/md';
import { PiCity as CityIcon } from 'react-icons/pi';
import useGetAutofillsData from 'src/app/routes/cart-page/hooks/useGetAutofillsData';
import { useEffect } from 'react';
import useShippingAddressStore from 'src/app/routes/cart-page/store/shippingAddress';
import { filterShippingData } from 'src/app/routes/cart-page/utils/shippingAddress';
import ShippingAutocomplete from './components/autofills/ShippingAutocomplete';

export default function Autofills({ formik }: ShippingAddressFields) {
    const {
        availableCountries,
        getAndSetAvailableCountries,
        isLoading,
        getAndSetShippingData,
    } = useGetAutofillsData();
    const { shippingPrices } = useShippingAddressStore();

    useEffect(() => {
        const controller = new AbortController();

        getAndSetAvailableCountries(controller.signal);

        return () => {
            controller.abort();
        };
    }, []);

    useEffect(() => {
        const controller = new AbortController();

        if (formik.values.country !== '')
            getAndSetShippingData(formik.values.country, controller.signal);

        return () => {
            controller.abort();
        };
    }, [formik.values.country]);

    const autofillData = [
        {
            label: 'Country',
            name: 'country',
            placeholder: 'Albania',
            icon: <MapIcon />,
            options: availableCountries ? ['', ...availableCountries] : [''],
        },
        {
            label: 'State',
            name: 'state',
            placeholder: 'Vlorë',
            icon: <StateIcon />,
            options: shippingPrices
                ? filterShippingData(shippingPrices, formik.values.country)
                : [''],
        },
        {
            label: 'City',
            name: 'city',
            placeholder: 'Ksamil',
            icon: <CityIcon />,
            options: shippingPrices
                ? filterShippingData(
                      shippingPrices,
                      formik.values.country,
                      formik.values.state
                  )
                : [''],
        },
        {
            label: 'Postal Code',
            name: 'postalCode',
            placeholder: '9706',
            icon: <PostalCodeIcon />,
            options: shippingPrices
                ? filterShippingData(
                      shippingPrices,
                      formik.values.country,
                      formik.values.state,
                      formik.values.city
                  )
                : [''],
        },
    ];

    return (
        <>
            {autofillData.map((input, index) => (
                <ShippingAutocomplete
                    autofillData={autofillData}
                    formik={formik}
                    index={index}
                    input={input}
                    isLoading={isLoading}
                />
            ))}
        </>
    );
}

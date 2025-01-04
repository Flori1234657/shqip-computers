/* eslint-disable @stylistic/js/indent */
import {
    Autocomplete,
    FormControl,
    FormHelperText,
    FormLabel,
    Grid,
} from '@mui/joy';
import { ShippingAddressFields } from './Inputs';

import {
    MdOutlineMap as MapIcon,
    MdMyLocation as StateIcon,
    MdOutlineSignpost as PostalCodeIcon,
} from 'react-icons/md';
import { PiCity as CityIcon } from 'react-icons/pi';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';
import useGetAutofillsData from 'src/app/routes/cart-page/hooks/useGetAutofillsData';
import { useEffect } from 'react';
import useShippingAddressStore from 'src/app/routes/cart-page/store/shippingAddress';
import { filterShippingStates } from 'src/app/routes/cart-page/utils/shippingAddress';

export default function Autofills({ formik }: ShippingAddressFields) {
    const { width } = useWindowDimensions();
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
            options: filterShippingStates(
                shippingPrices,
                formik.values.country
            ),
        },
        {
            label: 'City',
            name: 'city',
            placeholder: 'Ksamil',
            icon: <CityIcon />,
            options: [''],
        },
        {
            label: 'Postal Code',
            name: 'postalCode',
            placeholder: '9706',
            icon: <PostalCodeIcon />,
            options: [''],
        },
    ];

    return (
        <>
            {autofillData.map((input, index) => (
                <Grid
                    key={`shipping-address-autofill${input.name}`}
                    sx={{ width: { xs: '50%' } }}
                    xs={12}
                    sm={6}
                >
                    <FormControl size={width > 899 ? 'md2' : 'md'}>
                        <FormLabel sx={{ color: 'white', mb: '0.25rem' }}>
                            {input.label}
                        </FormLabel>
                        <Autocomplete
                            name={input.name}
                            placeholder={input.placeholder}
                            onChange={(__, newValue) => {
                                formik.setFieldValue(input.name, newValue);
                            }}
                            value={
                                formik.values[
                                    input.name as keyof typeof formik.values
                                ]
                            }
                            startDecorator={input.icon}
                            slotProps={{
                                popupIndicator: {
                                    style: {
                                        display: 'none',
                                    },
                                },
                                clearIndicator: {
                                    style: {
                                        display: 'none',
                                    },
                                },
                                listbox: {
                                    style: {
                                        fontSize: '0.75em',
                                        padding: '0.5em',
                                        gap: '0.25em',
                                    },
                                },
                            }}
                            options={input.options as Array<string | number>}
                            getOptionLabel={(option) => String(option)}
                            sx={{ borderRadius: { xs: '0.5rem' } }}
                            loading={isLoading && input.name === 'country'}
                            disabled={
                                index !== 0
                                    ? !isLoading &&
                                      formik.values[
                                          autofillData[index - 1]
                                              .name as keyof typeof formik.values
                                      ] === ''
                                    : false
                            } // we check if the field before is selected or not
                        />

                        {formik.errors[
                            input.name as keyof typeof formik.errors
                        ] &&
                            formik.touched[
                                input.name as keyof typeof formik.touched
                            ] && (
                                <FormHelperText
                                    sx={(theme) => ({
                                        color: theme.palette.danger[500],
                                    })}
                                >
                                    {
                                        formik.errors[
                                            input.name as keyof typeof formik.errors
                                        ]
                                    }
                                </FormHelperText>
                            )}
                    </FormControl>
                </Grid>
            ))}
        </>
    );
}

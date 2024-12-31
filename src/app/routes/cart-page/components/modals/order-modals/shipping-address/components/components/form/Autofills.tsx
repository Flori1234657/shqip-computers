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

export default function Autofills({ formik }: ShippingAddressFields) {
    const { width } = useWindowDimensions();

    const autofillData = [
        {
            label: 'Country',
            name: 'country',
            placeholder: 'Albania',
            icon: <MapIcon />,
            options: ['', 'Albania', 'Kosovo', 'Macedonia'],
        },
        {
            label: 'State',
            name: 'state',
            placeholder: 'Vlore',
            icon: <StateIcon />,
            options: ['', 'Vlora', 'Berati', 'Fieri'],
        },
        {
            label: 'City',
            name: 'city',
            placeholder: 'Ksamil',
            icon: <CityIcon />,
            options: ['', 'Ksamili', 'Durrsi', 'Tirana'],
        },
        {
            label: 'Postal Code',
            name: 'postalCode',
            placeholder: '9706',
            icon: <PostalCodeIcon />,
            options: ['', 9706, 9707, 9708],
        },
    ];

    return (
        <>
            {autofillData.map((input) => (
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

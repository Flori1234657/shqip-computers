/* eslint-disable @stylistic/js/indent */
import {
    Autocomplete,
    FormControl,
    FormHelperText,
    FormLabel,
    Grid,
} from '@mui/joy';
import { FormikProps } from 'formik';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

type Props = {
    input: {
        label: string;
        name: string;
        placeholder: string;
        icon: JSX.Element;
        options: string[];
    };
    formik: FormikProps<{
        fullName: string;
        houseNumber: number;
        phoneNumber: string;
        email: string;
        streetName: string;
        country: string;
        state: string;
        city: string;
        postalCode: string;
    }>;
    index: number;
    autofillData: {
        label: string;
        name: string;
        placeholder: string;
        icon: JSX.Element;
        options: Array<string | number>;
    }[];
    isLoading: boolean;
};

export default function ShippingAutocomplete({
    autofillData,
    formik,
    index,
    input,
    isLoading,
}: Props) {
    const { width } = useWindowDimensions();

    const handleChange = (
        __: React.SyntheticEvent<Element, Event>,
        newValue: string | number | null
    ) => {
        if (
            index !== 3 &&
            formik.values[input.name as keyof typeof formik.values] !== ''
        ) {
            autofillData.slice(index + 1).forEach((item) => {
                formik.setFieldValue(item.name, '');
            });
        }
        formik.setFieldValue(input.name, newValue);
    };

    return (
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
                    onChange={handleChange}
                    value={
                        formik.values[input.name as keyof typeof formik.values]
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

                {formik.errors[input.name as keyof typeof formik.errors] &&
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
    );
}

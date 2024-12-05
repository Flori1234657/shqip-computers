/* eslint-disable @stylistic/js/indent */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FormControl, FormHelperText, FormLabel, Grid, Input } from '@mui/joy';
import { FormikProps } from 'formik';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

import {
    MdOutlineLocalPhone as PhoneIcon,
    MdOutlineHome as HomeIcon,
} from 'react-icons/md';
import { FaRegPenToSquare as AddressIcon } from 'react-icons/fa6';
import { BsEnvelope as MailIcon, BsPerson as PersonIcon } from 'react-icons/bs';

export interface ShippingAddressFields {
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
}

export default function Inputs({ formik }: ShippingAddressFields) {
    const { width } = useWindowDimensions();

    const inputsData = [
        {
            label: 'Full Name',
            name: 'fullName',
            placeholder: 'Florian Dollani',
            icon: <PersonIcon />,
        },
        {
            label: 'House Number',
            name: 'houseNumber',
            placeholder: '0',
            icon: <HomeIcon />,
        },
        {
            label: 'Phone Number',
            name: 'phoneNumber',
            placeholder: '+355 68 839 3968',
            icon: <PhoneIcon />,
        },
        {
            label: 'Email',
            name: 'email',
            placeholder: 'email@provider.domain',
            icon: <MailIcon />,
        },
        {
            label: 'Street Name',
            name: 'streetName',
            placeholder: 'Rruga Riza Cerova',
            icon: <AddressIcon />,
        },
    ];

    return (
        <>
            {inputsData.map((input) => (
                <Grid
                    key={`sale-request-input${input.name}`}
                    width='100%'
                    xs={12}
                    md={input.name !== 'streetName' && 6}
                >
                    <FormControl size={width > 899 ? 'md2' : 'md'}>
                        <FormLabel sx={{ color: 'white', mb: '0.25rem' }}>
                            {input.label}
                        </FormLabel>
                        <Input
                            name={input.name}
                            placeholder={input.placeholder}
                            onChange={formik.handleChange}
                            value={formik.values[input.name]}
                            startDecorator={input.icon}
                        />

                        {formik.errors[input.name] &&
                            formik.touched[input.name] && (
                                <FormHelperText
                                    sx={(theme) => ({
                                        color: theme.palette.danger[500],
                                    })}
                                >
                                    {formik.errors[input.name]}
                                </FormHelperText>
                            )}
                    </FormControl>
                </Grid>
            ))}
        </>
    );
}

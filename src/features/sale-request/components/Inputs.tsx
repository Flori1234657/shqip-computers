/* eslint-disable @stylistic/js/indent */
import { FormControl, FormHelperText, FormLabel, Grid, Input } from '@mui/joy';
import {
    MdComputer as PcIcon,
    MdOutlineLocalPhone as PhoneIcon,
} from 'react-icons/md';
import { BsEnvelope as MailIcon, BsPerson as PersonIcon } from 'react-icons/bs';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';
import { SaleRequestInputs } from '../types/data';

export default function Inputs({ formik }: SaleRequestInputs) {
    const { width } = useWindowDimensions();

    const inputsData = [
        {
            label: 'Full Name',
            name: 'fullName',
            placeholder: 'Florian Dollani',
            icon: <PersonIcon />,
        },
        {
            label: 'Pc Model',
            name: 'pcModel',
            placeholder: 'Fujitsu Esprimo p700',
            icon: <PcIcon />,
        },
        {
            label: 'Email',
            name: 'email',
            placeholder: 'email@provider.domain',
            icon: <MailIcon />,
        },
        {
            label: 'Phone Number',
            name: 'phoneNumber',
            placeholder: '+355 68 839 3968',
            icon: <PhoneIcon />,
        },
    ];

    return (
        <>
            {inputsData.map((input) => (
                <Grid
                    key={`sale-request-input${input.name}`}
                    width='100%'
                    xs={12}
                    sm={6}
                >
                    <FormControl size={width > 899 ? 'md2' : 'md'}>
                        <FormLabel sx={{ color: 'white', mb: '0.25rem' }}>
                            {input.label}
                        </FormLabel>
                        <Input
                            name={input.name}
                            placeholder={input.placeholder}
                            onChange={formik.handleChange}
                            value={
                                formik.values[
                                    input.name as keyof typeof formik.values
                                ]
                            }
                            startDecorator={input.icon}
                        />

                        {formik.errors[
                            input.name as keyof typeof formik.errors
                        ] &&
                            formik.touched[
                                input.name as keyof typeof formik.values
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

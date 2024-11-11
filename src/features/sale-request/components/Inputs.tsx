// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FormControl, FormHelperText, FormLabel, Input } from '@mui/joy';
import { FormikProps } from 'formik';

import {
    MdComputer as PcIcon,
    MdOutlineLocalPhone as PhoneIcon,
} from 'react-icons/md';
import { BsEnvelope as MailIcon, BsPerson as PersonIcon } from 'react-icons/bs';

interface Props {
    formik: FormikProps<{
        fullName: string;
        pcModel: string;
        email: string;
        phoneNumber: string;
        sellingReason: string;
    }>;
}

export default function Inputs({ formik }: Props) {
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
                <FormControl>
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
            ))}
        </>
    );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FormControl, FormHelperText, FormLabel, Input } from '@mui/joy';
import { BsEnvelope as MailIcon } from 'react-icons/bs';
import { MdOutlineLocalPhone as PhoneIcon } from 'react-icons/md';
import { ContactFormFormikInputProps } from '../../../interface/contactFormFormik';

export default function SecondInputs({ formik }: ContactFormFormikInputProps) {
    const inputsData = [
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

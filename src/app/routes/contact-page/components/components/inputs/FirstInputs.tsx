// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FormControl, FormHelperText, FormLabel, Input, Stack } from '@mui/joy';
import { BsPerson as PersonIcon } from 'react-icons/bs';
import { TbMessageChatbot as AgeIcon } from 'react-icons/tb';
import { ContactFormFormikInputProps } from '../../../interface/contactFormFormik';

export default function FirstInputs({ formik }: ContactFormFormikInputProps) {
    const inputsData = [
        {
            label: 'Full Name',
            name: 'fullName',
            placeholder: 'Florian Dollani',
            icon: <PersonIcon />,
        },
        {
            label: 'Age',
            name: 'age',
            placeholder: '15',
            icon: <AgeIcon />,
        },
    ];

    return (
        <Stack direction='row'>
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
        </Stack>
    );
}

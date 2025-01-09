/* eslint-disable @stylistic/js/indent */
import { FormControl, FormHelperText, FormLabel, Input, Stack } from '@mui/joy';
import { BsEnvelope as MailIcon } from 'react-icons/bs';
import { MdOutlineLocalPhone as PhoneIcon } from 'react-icons/md';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';
import { ContactFormFormikInputProps } from '../../../types/data';

export default function SecondInputs({ formik }: ContactFormFormikInputProps) {
    const { width } = useWindowDimensions();
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
        <Stack
            gap={{ xs: '0.75rem', md: '0.469rem' }}
            direction={{ md: 'row' }}
        >
            {inputsData.map((input) => (
                <FormControl
                    key={`contat-us-second-page-inputs${input.name}`}
                    size={width > 899 ? 'md2' : 'md'}
                    sx={{
                        minWidth: { md: '45%' },
                    }}
                >
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

                    {formik.errors[input.name as keyof typeof formik.values] &&
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
                                        input.name as keyof typeof formik.values
                                    ]
                                }
                            </FormHelperText>
                        )}
                </FormControl>
            ))}
        </Stack>
    );
}

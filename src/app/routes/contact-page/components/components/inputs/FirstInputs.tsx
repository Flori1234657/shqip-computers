/* eslint-disable @stylistic/js/indent */
import { FormControl, FormHelperText, FormLabel, Input, Stack } from '@mui/joy';
import { BsPerson as PersonIcon } from 'react-icons/bs';
import { TbMessageChatbot as AgeIcon } from 'react-icons/tb';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';
import { ContactFormFormikInputProps } from '../../../types/data';

export default function FirstInputs({ formik }: ContactFormFormikInputProps) {
    const { width } = useWindowDimensions();

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
        <Stack direction='row' gap={{ xs: '0.5rem', md: '0.469rem' }}>
            {inputsData.map((input) => (
                <FormControl
                    key={`contat-us-first-page-inputs${input.name}`}
                    size={width > 899 ? 'md2' : 'md'}
                    sx={{
                        minWidth: input.name === 'age' ? '25%' : '70%',
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

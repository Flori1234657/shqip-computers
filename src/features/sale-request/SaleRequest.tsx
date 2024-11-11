import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Stack,
    Textarea,
} from '@mui/joy';
import { formSchema } from './schemas/yupFormSchema';
import { Formik } from 'formik';
import Inputs from './components/Inputs';

import { TbMessageCircle as MsgIcon, TbSend as SendIcon } from 'react-icons/tb';
import { IoMdClose as ClearIcon } from 'react-icons/io';

export default function SaleRequest() {
    const initialValues = {
        fullName: '',
        pcModel: '',
        email: '',
        phoneNumber: '',
        sellingReason: '',
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            // 🌐 Post request to the server
            onSubmit={(values) => console.log(values)}
        >
            {(formik) => {
                const {
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                    // isValid,
                    // dirty,
                } = formik;

                return (
                    <form onSubmit={handleSubmit}>
                        <Stack
                            py='1.25rem'
                            px='1.625rem'
                            gap='0.75rem'
                            sx={(theme) => ({
                                backgroundColor: theme.palette.primary[800],
                                boxShadow: '0 4px 5.8px 5px rgba(0,0,0,0.5)',
                                borderRadius: '1rem',
                            })}
                        >
                            <Inputs formik={formik} />
                            <FormControl>
                                <FormLabel
                                    sx={{ color: 'white', mb: '0.25rem' }}
                                >
                                    Selling Reason
                                </FormLabel>
                                <Textarea
                                    name='sellingReason'
                                    placeholder='Only serious sellers...'
                                    minRows={4}
                                    maxRows={4}
                                    onChange={handleChange}
                                    value={values.sellingReason}
                                    startDecorator={<MsgIcon />}
                                />
                                {errors.sellingReason &&
                                    touched.sellingReason && (
                                    <FormHelperText
                                        sx={(theme) => ({
                                            color: theme.palette
                                                .danger[500],
                                        })}
                                    >
                                        {errors.sellingReason}
                                    </FormHelperText>
                                )}
                            </FormControl>

                            <Stack mt='0.25rem' gap='0.5rem'>
                                <Button
                                    variant='outlined'
                                    color='danger'
                                    endDecorator={<ClearIcon />}
                                >
                                    Clear
                                </Button>
                                <Button
                                    type='submit'
                                    endDecorator={<SendIcon />}
                                >
                                    Send To Us
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                );
            }}
        </Formik>
    );
}

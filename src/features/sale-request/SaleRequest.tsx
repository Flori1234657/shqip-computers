import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Stack,
    Textarea,
} from '@mui/joy';
import { formSchema } from './schemas/yupFormSchema';
import { Formik } from 'formik';

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
                    <Stack>
                        <form onSubmit={handleSubmit}>
                            <FormControl>
                                <FormLabel>Full Name</FormLabel>
                                <Input
                                    name='fullName'
                                    placeholder='Florian Dollani'
                                    onChange={handleChange}
                                    value={values.fullName}
                                />

                                {errors.fullName && touched.fullName && (
                                    <FormHelperText>
                                        {errors.fullName}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl>
                                <FormLabel>Pc Model</FormLabel>
                                <Input
                                    name='pcModel'
                                    placeholder='Fujitsu Esprimo p700'
                                    onChange={handleChange}
                                    value={values.pcModel}
                                />
                                {errors.pcModel && touched.pcModel && (
                                    <FormHelperText>
                                        {errors.pcModel}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    name='email'
                                    placeholder='email@provider.domain'
                                    onChange={handleChange}
                                    value={values.email}
                                />
                                {errors.email && touched.email && (
                                    <FormHelperText>
                                        {errors.email}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl>
                                <FormLabel>Phone Number</FormLabel>
                                <Input
                                    name='phoneNumber'
                                    placeholder='+355 68 839 3968'
                                    onChange={handleChange}
                                    value={values.phoneNumber}
                                />
                                {errors.phoneNumber && touched.phoneNumber && (
                                    <FormHelperText>
                                        {errors.phoneNumber}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl>
                                <FormLabel>Selling Reason</FormLabel>
                                <Textarea
                                    name='sellingReason'
                                    placeholder='Only serious sellers...'
                                    onChange={handleChange}
                                    value={values.sellingReason}
                                />
                                {errors.sellingReason &&
                                    touched.sellingReason && (
                                    <FormHelperText>
                                        {errors.sellingReason}
                                    </FormHelperText>
                                )}
                            </FormControl>

                            <Stack>
                                <Button>Clear</Button>
                                <Button type='submit'>Send To Us</Button>
                            </Stack>
                        </form>
                    </Stack>
                );
            }}
        </Formik>
    );
}

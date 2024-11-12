import { Formik } from 'formik';
import { formSchema } from './schemas/yupFormShcema';
import { Stack } from '@mui/joy';
import Inputs from './components/Inputs';
import TextArea from './components/TextArea';
import Buttons from './components/Buttons';
import OtherWays from './components/OtherWays';

export default function ContactUs() {
    const initialValues = {
        fullName: '',
        age: 0,
        email: '',
        phoneNumber: '',
        contactingReason: '',
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            // 🌐 Post request to the server
            onSubmit={(values) => console.log(values)}
        >
            {(formik) => {
                const { handleSubmit } = formik;

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
                            <TextArea formik={formik} />
                            <Buttons />

                            {/** Has nothing to do with form but only
                             * for a way for users to find other ways
                             * to contat the company 🙌
                             */}
                            <OtherWays />
                        </Stack>
                    </form>
                );
            }}
        </Formik>
    );
}

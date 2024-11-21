import { Grid, Stack } from '@mui/joy';
import { formSchema } from './schemas/yupFormSchema';
import { Formik } from 'formik';
import Inputs from './components/Inputs';

import TextArea from './components/TextArea';
import Buttons from './components/Buttons';
import useDisplayAlert from '../alert-feedback/hooks/useDisplayAlert';

export default function SaleRequest() {
    const { alertUser } = useDisplayAlert();
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
            onSubmit={(values) => {
                alertUser({
                    type: 'Success',
                    description:
                        'Your form is submitted successfully! Now wait for our response. ',
                });
                console.log(values);
            }}
        >
            {(formik) => {
                const { handleSubmit } = formik;

                return (
                    <form onSubmit={handleSubmit}>
                        <Stack
                            maxWidth={{ md: '18.34rem' }}
                            p={{ xs: '1.25rem 1.625rem', md: '0.938rem' }}
                            gap={{ xs: '0.75rem', md: '0.469rem' }}
                            sx={(theme) => ({
                                backgroundColor: theme.palette.primary[800],
                                boxShadow: '0 4px 5.8px 5px rgba(0,0,0,0.5)',
                                borderRadius: {
                                    xs: '1rem',
                                    md: '0.469rem',
                                },
                            })}
                        >
                            <Grid
                                container
                                rowSpacing={{
                                    xs: '0.75rem',
                                    md: '0.469rem',
                                }}
                                columnSpacing={{
                                    sm: '0.75rem',
                                    md: '0.469rem',
                                }}
                            >
                                <Inputs formik={formik} />
                                <TextArea formik={formik} />
                            </Grid>

                            <Buttons />
                        </Stack>
                    </form>
                );
            }}
        </Formik>
    );
}

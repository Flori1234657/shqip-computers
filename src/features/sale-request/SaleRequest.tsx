import { Grid, Stack } from '@mui/joy';
import { formSchema } from './schemas/yupFormSchema';
import { Formik } from 'formik';
import Inputs from './components/Inputs';

import TextArea from './components/TextArea';
import Buttons from './components/Buttons';

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
                            <Grid
                                container
                                rowSpacing={{ xs: '0.75rem' }}
                                columnSpacing={{ sm: '0.75rem' }}
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

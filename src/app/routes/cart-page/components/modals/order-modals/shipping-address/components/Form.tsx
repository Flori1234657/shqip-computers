import { Formik } from 'formik';
import { formSchema } from '../schema/yupFormSchema';
import Buttons from './components/form/Buttons';
import { Grid, Stack } from '@mui/joy';
import Inputs from './components/form/Inputs';
import Autofills from './components/form/Autofills';

export default function Form() {
    const initialValues = {
        fullName: '',
        houseNumber: 1,
        phoneNumber: '',
        email: '',
        streetName: '',
        country: '',
        state: '',
        city: '',
        postalCode: '',
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            // 🌐 Post request to the server
            onSubmit={(values, action) => {
                console.log(values);
                action.setValues(initialValues);
                action.resetForm();
            }}
            onReset={(_, action) => action.setValues(initialValues)}
        >
            {(formik) => {
                const { handleSubmit, handleReset } = formik;

                return (
                    <form onSubmit={handleSubmit} onReset={handleReset}>
                        <Stack gap={{ xs: '1rem', md: '0.703rem' }}>
                            <Grid
                                container
                                rowSpacing={{
                                    xs: '0.75rem',
                                    md: '0.469rem',
                                }}
                                columnSpacing={{
                                    xs: '0.75rem',
                                    md: '0.469rem',
                                }}
                            >
                                <Inputs formik={formik} />
                                <Autofills formik={formik} />
                            </Grid>

                            <Buttons />
                        </Stack>
                    </form>
                );
            }}
        </Formik>
    );
}

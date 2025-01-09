import { Grid, Stack } from '@mui/joy';
import { formSchema } from './schemas/yupFormSchema';
import { Formik } from 'formik';
import Inputs from './components/Inputs';

import TextArea from './components/TextArea';
import Buttons from './components/Buttons';
import { motion } from 'motion/react';
import useMakeSaleRequest from './hooks/useMakeSaleRequest';
import { useEffect } from 'react';

export default function SaleRequest() {
    const { isLoading, makeSaleRequest } = useMakeSaleRequest();
    const controller = new AbortController();

    useEffect(() => {
        return () => {
            controller.abort();
        };
    }, []);

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
            onSubmit={(values, action) => {
                makeSaleRequest(values, controller.signal);

                action.setValues(initialValues);
                action.resetForm();
            }}
            onReset={(_, action) => action.setValues(initialValues)}
        >
            {(formik) => {
                const { handleSubmit, handleReset } = formik;

                return (
                    <form onSubmit={handleSubmit} onReset={handleReset}>
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
                            component={motion.div}
                            initial={{ translateY: 50 }}
                            whileInView={{
                                translateY: 0,
                                transition: { duration: 0.8 },
                            }}
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

                            <Buttons isLoading={isLoading} />
                        </Stack>
                    </form>
                );
            }}
        </Formik>
    );
}

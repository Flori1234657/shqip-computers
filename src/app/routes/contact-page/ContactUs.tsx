import { Formik } from 'formik';
import { formSchema } from './schemas/yupFormShcema';
import { Stack, Typography } from '@mui/joy';
import Inputs from './components/Inputs';
import TextArea from './components/TextArea';
import Buttons from './components/Buttons';
import OtherWays from './components/OtherWays';

import Image from 'src/components/Image';
import MessageIllustration from 'src/assets/images/svg/contact-us/conversation.svg';
import EnvelopeIllustration from 'src/assets/images/svg/contact-us/envelope.svg';
import { motion } from 'motion/react';
import { formSvgVariants } from 'src/animations/contact-us-page/variants';
import useMakeContactRequest from './hooks/useMakeContactRequest';
import { useEffect } from 'react';

export default function ContactUs() {
    const { isLoading, makeContactRequest } = useMakeContactRequest();
    const controller = new AbortController();

    useEffect(() => {
        return () => {
            controller.abort();
        };
    }, []);

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
            onSubmit={(values, action) => {
                makeContactRequest(values, controller.signal);

                action.setValues(initialValues);
                action.resetForm();
            }}
        >
            {(formik) => {
                const { handleSubmit } = formik;

                return (
                    <form
                        style={{ minHeight: '100vh' }}
                        onSubmit={handleSubmit}
                    >
                        <Stack
                            position='relative'
                            maxWidth={{ md: '18.34rem' }}
                            p={{ xs: '1.25rem', md: '0.938rem' }}
                            gap={{ xs: '1rem', md: '0.469rem' }}
                            sx={(theme) => ({
                                mt: { xs: '8rem', md: '4.688rem' },
                                mb: { xs: '2rem', md: 0 },
                                mx: 'auto',
                                backgroundColor: theme.palette.primary[900],
                                boxShadow: theme.shadow.boxShadow69,
                                borderRadius: {
                                    xs: '1rem',
                                    md: '0.469rem',
                                },
                            })}
                            component={motion.div}
                            initial={{ translateY: 75 }}
                            animate={{
                                translateY: 0,
                                transition: { duration: 0.75 },
                            }}
                        >
                            <Image
                                ratio=' 1.18/1'
                                width={{ xs: '10.188rem', md: '8.989rem' }}
                                src={MessageIllustration}
                                objectFit='fill'
                                otherStyles={{
                                    position: 'absolute',
                                    top: { xs: '-4.438rem', md: 0 },
                                    left: { xs: '-1.5rem', md: '17rem' },
                                    zIndex: -1,
                                }}
                                alt='Illustartion'
                                animate={{
                                    variants: formSvgVariants,
                                    initial: 'initial',
                                    animate: 'animate',
                                }}
                            />

                            <Typography
                                fontFamily='Poppins'
                                fontWeight='500'
                                lineHeight='1.2'
                                sx={{
                                    fontSize: { xs: '1.2rem', md: '0.972rem' },
                                    color: 'white',
                                }}
                            >
                                Contact us
                            </Typography>
                            <Stack gap={{ xs: '0.75rem', md: '0.469rem' }}>
                                <Inputs formik={formik} />
                                <TextArea formik={formik} />
                            </Stack>
                            <Buttons isLoading={isLoading} />

                            {/** Has nothing to do with form but only
                             * for a way for users to find other ways
                             * to contat the company 🙌
                             */}
                            <OtherWays />

                            <Image
                                ratio='1.21/1'
                                width={{ xs: '9.612rem', md: '9.242rem' }}
                                src={EnvelopeIllustration}
                                objectFit='fill'
                                otherStyles={{
                                    position: 'absolute',
                                    bottom: { xs: '-3.4rem', md: 0 },
                                    right: { xs: '-1.7rem', md: '15rem' },
                                    zIndex: -1,
                                }}
                                alt='Illustartion'
                                animate={{
                                    variants: formSvgVariants,
                                    initial: 'initial',
                                    animate: 'animate',
                                }}
                            />
                        </Stack>
                    </form>
                );
            }}
        </Formik>
    );
}

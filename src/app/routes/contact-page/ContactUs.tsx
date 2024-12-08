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
                                mt: { xs: '8rem' },
                                mb: { xs: '2rem' },
                                backgroundColor: theme.palette.primary[900],
                                boxShadow: theme.shadow.boxShadow69,
                                borderRadius: {
                                    xs: '1rem',
                                    md: '0.469rem',
                                },
                            })}
                        >
                            <Image
                                ratio=' 1.18/1'
                                width={{ xs: '10.188rem' }}
                                src={MessageIllustration}
                                objectFit='fill'
                                otherStyles={{
                                    position: 'absolute',
                                    top: { xs: '-4.438rem' },
                                    left: { xs: '-1.5rem' },
                                    zIndex: -1,
                                }}
                                alt='Illustartion'
                            />

                            <Typography
                                fontFamily='Poppins'
                                fontWeight='500'
                                lineHeight='1.2'
                                sx={{
                                    fontSize: { xs: '1.2rem', md: '0.809rem' },
                                    color: 'white',
                                }}
                            >
                                Contact us
                            </Typography>
                            <Stack gap={{ xs: '0.75rem' }}>
                                <Inputs formik={formik} />
                                <TextArea formik={formik} />
                            </Stack>
                            <Buttons />

                            {/** Has nothing to do with form but only
                             * for a way for users to find other ways
                             * to contat the company 🙌
                             */}
                            <OtherWays />

                            <Image
                                ratio='1.21/1'
                                width={{ xs: '9.612rem' }}
                                src={EnvelopeIllustration}
                                objectFit='fill'
                                otherStyles={{
                                    position: 'absolute',
                                    bottom: { xs: '-3.4rem' },
                                    right: { xs: '-1.7rem' },
                                    zIndex: -1,
                                }}
                                alt='Illustartion'
                            />
                        </Stack>
                    </form>
                );
            }}
        </Formik>
    );
}

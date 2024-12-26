import { Stack, Typography } from '@mui/joy';
import TestimonialCards from './components/testimonials-section/TestimonialCards';
import Image from 'src/components/Image';
import Blob from 'src/assets/images/svg/home/testimonials-blob.svg';
import { motion } from 'motion/react';
import { heroTextVariants } from 'src/animations/home-page/hero-variants';

function TestimonialsSection() {
    return (
        <Stack
            alignItems={{ md: 'center' }}
            mt={{ xs: '10.75rem', sm: '15rem', md: '7.313rem' }}
            gap={{ xs: '5rem', sm: '2.917rem', md: '4rem' }}
        >
            <Typography
                textAlign='center'
                level='title-md'
                sx={(theme) => ({
                    fontSize: { md: '1.681rem' },
                    maxWidth: { sm: '16rem' },
                    textAlign: 'center',
                    color: theme.palette.primary[800],
                })}
                component={motion.h2}
                variants={heroTextVariants}
                initial='initialHeading'
                whileInView='animateHeading'
            >
                What other’s say about us 💬
            </Typography>

            <Stack
                gap={{ xs: '2.5rem', md: '2.563rem' }}
                position='relative'
                direction={{ md: 'row' }}
            >
                <Image
                    ratio='0.98/1'
                    src={Blob}
                    width={{ xs: '16.188rem', md: '13.418rem' }}
                    alt='blob'
                    objectFit='contain'
                    otherStyles={{
                        position: 'absolute',
                        top: { xs: '-3rem', sm: '3rem', md: '-2.75rem' },
                        left: { xs: '-2.75rem', sm: '-6rem', md: '4.625rem' },
                        zIndex: -1,
                    }}
                />
                <TestimonialCards />
            </Stack>
        </Stack>
    );
}

export default TestimonialsSection;

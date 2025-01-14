import { Stack, Typography } from '@mui/joy';
import { motion } from 'motion/react';
import { heroTextVariants } from 'src/animations/home-page/hero-variants';

export default function HeroTexts() {
    return (
        <Stack gap={{ xs: '1rem', md: '0.703rem' }}>
            <Typography
                level='title-lg'
                sx={(theme) => ({
                    backgroundImage: theme.palette.gradient.heroTxt,
                    color: 'transparent',
                    backgroundClip: 'text',
                    fontSize: { md: '2.016rem' },

                    textAlign: 'center',
                })}
                component={motion.h1}
                variants={heroTextVariants}
                initial='initialHeading'
                animate='animateHeading'
            >
                Welcome to your online pc storage!
            </Typography>
            <Typography
                fontSize='md'
                lineHeight='1.4'
                fontWeight='500'
                sx={(theme) => ({
                    color: theme.palette.neutral[700],
                    textAlign: 'center',
                    fontSize: { md: '0.675rem' },
                })}
                component={motion.h2}
                variants={heroTextVariants}
                initial='initialSubHeading'
                animate='animateSubHeading'
            >
                Find everything you want, from desktop’s to small electronic
                parts like transistor’s.
            </Typography>
        </Stack>
    );
}

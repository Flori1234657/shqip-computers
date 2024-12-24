import { Stack, Typography } from '@mui/joy';
import SearchBar from 'src/features/search-bar/SearchBar';

import Image from 'src/components/Image';
import RightBlob from 'src/assets/images/svg/home/hero-blob-1.svg';
import LeftBlob from 'src/assets/images/svg/home/hero-blob-2.svg';
import { motion } from 'motion/react';
import { heroBlobVariants } from 'src/animations/home-page/hero-variants';

export default function HeroSection() {
    return (
        <Stack
            mt={{ xs: '7.5rem', md: '5.876rem' }}
            gap={{ xs: '2rem', md: '2.578rem' }}
            maxWidth={{ md: '25.43rem' }}
        >
            <Image
                ratio='1.01/1'
                src={RightBlob}
                width='5.563rem'
                alt='blob'
                otherStyles={{
                    position: 'absolute',
                    top: { xs: '3rem', sm: '3.125rem', md: '12.344rem' },
                    left: { xs: 0, sm: '2.083rem', md: '4.313rem' },
                    zIndex: '-1',
                }}
                animate={{
                    variants: heroBlobVariants,
                    initial: 'initialLeft',
                    animate: 'animateLeft',
                }}
            />

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
                    initial={{ translateY: 100, opacity: 0 }}
                    animate={{
                        translateY: 0,
                        opacity: 1,
                        transition: { duration: 0.5 },
                    }}
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
                    initial={{ translateY: 100, opacity: 0 }}
                    animate={{
                        translateY: 0,
                        opacity: 1,
                        transition: { duration: 0.75 },
                    }}
                >
                    Find everything you want, from desktop’s to small electronic
                    parts like transistor’s.
                </Typography>
            </Stack>
            <SearchBar />
            <Image
                ratio='1.11/1'
                src={LeftBlob}
                width='5.875rem'
                alt='blob'
                otherStyles={{
                    position: 'absolute',
                    top: { xs: '21.5rem', sm: '17.5rem', md: '5.469rem' },
                    right: { xs: '0.313rem', sm: '0.417rem', md: '6.688rem' },
                    zIndex: '-1',
                }}
                animate={{
                    variants: heroBlobVariants,
                    initial: 'initialRight',
                    animate: 'animateRight',
                }}
            />
        </Stack>
    );
}

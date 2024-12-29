import { Chip, Stack, Typography } from '@mui/joy';
import { motion } from 'motion/react';
import { heroTextVariants } from 'src/animations/home-page/hero-variants';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function Status() {
    const { width } = useWindowDimensions();

    return (
        <Stack gap={{ xs: '0.25rem', md: '0.118rem' }}>
            <Typography
                fontSize={{ xs: '1rem', md: '0.675rem' }}
                fontWeight='600'
                lineHeight='1.6'
                sx={(theme) => ({ color: theme.palette.neutral[500] })}
                component={motion.h3}
                variants={heroTextVariants}
                initial='initialSubHeading'
                animate='animateSubHeading'
            >
                Status
            </Typography>
            <Stack direction='row' gap={{ xs: '0.5rem', md: '0.234rem' }}>
                <Chip
                    size={width < 900 ? 'md' : 'md2'}
                    color='primary'
                    variant='solid'
                    sx={{ borderRadius: { xs: '0.5rem', md: '0.234rem' } }}
                    component={motion.div}
                    variants={heroTextVariants}
                    initial='initialSubHeading'
                    animate={{
                        translateY: 0,
                        opacity: 1,
                        transition: { duration: 0.75, delay: 0.25 },
                    }}
                >
                    ⚙️ Used
                </Chip>
                <Chip
                    size={width < 900 ? 'md' : 'md2'}
                    color='primary'
                    variant='solid'
                    sx={{ borderRadius: { xs: '0.5rem', md: '0.234rem' } }}
                    component={motion.div}
                    variants={heroTextVariants}
                    initial='initialSubHeading'
                    animate={{
                        translateY: 0,
                        opacity: 1,
                        transition: { duration: 0.75, delay: 0.3 },
                    }}
                >
                    ✔️ In Stock
                </Chip>
            </Stack>
        </Stack>
    );
}

import { Stack, Typography } from '@mui/joy';
import { motion } from 'motion/react';
import { useContext } from 'react';
import { heroTextVariants } from 'src/animations/home-page/hero-variants';
import { SingleProductPageContext } from '../../../context/useSingleProductPageContext';

export default function Description() {
    const productData = useContext(SingleProductPageContext);

    return (
        <Stack>
            <Typography
                lineHeight='1.6'
                fontWeight='600'
                fontSize={{ xs: '1.2rem', md: '0.809rem' }}
                sx={(theme) => ({ color: theme.palette.primary[900] })}
                component={motion.h3}
                variants={heroTextVariants}
                initial='initialHeading'
                whileInView='animateHeading'
            >
                Description
            </Typography>
            <Typography
                lineHeight='1.4'
                fontSize={{ xs: '1rem', md: '0.675rem' }}
                sx={(theme) => ({ color: theme.palette.neutral[700] })}
                component={motion.p}
                variants={heroTextVariants}
                initial='initialSubHeading'
                whileInView='animateSubHeading'
            >
                {productData?.description}
            </Typography>
        </Stack>
    );
}

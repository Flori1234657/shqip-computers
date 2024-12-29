import { Typography } from '@mui/joy';
import { motion } from 'motion/react';
import { heroTextVariants } from 'src/animations/home-page/hero-variants';

export default function Title() {
    return (
        <Typography
            lineHeight='1.2'
            fontWeight='600'
            fontSize={{ xs: '1.2rem', md: '0.972rem' }}
            sx={(theme) => ({ color: theme.palette.primary[900] })}
            component={motion.h3}
            variants={heroTextVariants}
            initial='initialHeading'
            whileInView='animateHeading'
        >
            Suggested product’s
        </Typography>
    );
}

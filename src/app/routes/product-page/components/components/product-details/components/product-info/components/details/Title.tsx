import { Typography } from '@mui/joy';
import { motion } from 'motion/react';
import { heroTextVariants } from 'src/animations/home-page/hero-variants';

export default function Title() {
    return (
        <Typography
            level='title-sm'
            sx={(theme) => ({
                fontSize: { md: '1.166rem' },
                maxWidth: { md: '13.5rem' },
                color: theme.palette.primary[900],
            })}
            component={motion.h2}
            variants={heroTextVariants}
            initial='initialHeading'
            animate='animateHeading'
        >
            Lenovo thinkpad g13th max ram 128gb
        </Typography>
    );
}

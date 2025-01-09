import { Typography } from '@mui/joy';
import { motion } from 'motion/react';
import { heroTextVariants } from 'src/animations/home-page/hero-variants';

export default function NoItemInTheCard() {
    return (
        <Typography
            textAlign='center'
            fontFamily='Poppins'
            fontWeight='600'
            lineHeight='1.6'
            sx={(theme) => ({
                mt: { xs: '4.75rem', md: '0' },
                alignSelf: 'center',
                fontSize: { xs: '2.075rem', md: '1.401rem' },
                color: theme.palette.neutral[500],
            })}
            component={motion.h2}
            variants={heroTextVariants}
            initial='initialHeading'
            animate='animateHeading'
        >
            Your card is empty 🛒
        </Typography>
    );
}

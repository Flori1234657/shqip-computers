import { Typography } from '@mui/joy';
import { motion } from 'motion/react';
import { heroTextVariants } from 'src/animations/home-page/hero-variants';

export default function NoProductsAvailable({ text }: { text?: string }) {
    return (
        <Typography
            level='title-sm'
            textAlign='center'
            fontSize={{ md: '1.4rem' }}
            sx={(theme) => ({
                color: text
                    ? theme.palette.danger[500]
                    : theme.palette.neutral[500],
                pt: { xs: '3rem' },
                maxWidth: { md: '20.813rem' },
            })}
            component={motion.p}
            variants={heroTextVariants}
            initial='initialHeading'
            animate='animateHeading'
        >
            {text ?? 'For the moment there are no available products 📦'}
        </Typography>
    );
}

import { Typography } from '@mui/joy';
import { motion } from 'motion/react';
import { useContext } from 'react';
import { heroTextVariants } from 'src/animations/home-page/hero-variants';
import { SingleProductPageContext } from 'src/app/routes/product-page/context/useSingleProductPageContext';

export default function Title() {
    const productData = useContext(SingleProductPageContext);

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
            {productData?.name}
        </Typography>
    );
}

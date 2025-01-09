import { Stack, Typography } from '@mui/joy';
import { motion } from 'motion/react';
import { heroTextVariants } from 'src/animations/home-page/hero-variants';
import LogoCollection from 'src/assets/images/svg/home/brands-image.svg';
import Image from 'src/components/Image';

function BrandsSection() {
    return (
        <Stack
            mt={{ xs: '10.75rem', sm: '15rem', md: '7.313rem' }}
            gap={{ xs: '2rem', sm: '2.917rem', md: '4rem' }}
            alignItems='center'
        >
            <Typography
                textAlign='center'
                level='title-md'
                sx={(theme) => ({
                    fontSize: { md: '1.681rem' },
                    maxWidth: { sm: '15rem' },
                    textAlign: 'center',
                    color: theme.palette.primary[800],
                })}
                component={motion.h2}
                variants={heroTextVariants}
                initial='initialHeading'
                whileInView='animateHeading'
            >
                Brand’s you can find here 🔎
            </Typography>

            <Image
                ratio='1.15/1'
                src={LogoCollection}
                width={{ xs: '17rem', md: '14.619rem' }}
                alt='logo collection'
                objectFit='contain'
            />
        </Stack>
    );
}

export default BrandsSection;

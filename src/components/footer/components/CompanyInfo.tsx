import { Stack, Typography } from '@mui/joy';
import Image from 'src/components/Image';
import Logo from 'src/assets/images/logo-no-bckg.png';
import { motion } from 'motion/react';
import { heroTextVariants } from 'src/animations/home-page/hero-variants';

function CompanyInfo() {
    return (
        <Stack
            gap={{ xs: '0.5rem', md: '0.234rem' }}
            height={{ md: '15.9rem' }}
        >
            <Image
                ratio='1/1'
                src={Logo}
                width={{ xs: '4.5rem', md: '4.336rem' }}
                alt='logo'
                animate={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 1 },
                }}
            />
            <Typography
                fontFamily='Poppins'
                fontWeight='600'
                fontSize={{ xs: 'lg', md: '0.973rem' }}
                lineHeight='1.2'
                letterSpacing='0.5px'
                sx={(theme) => ({ color: theme.palette.neutral[800] })}
                component={motion.h2}
                variants={heroTextVariants}
                initial='initialHeading'
                whileInView='animateHeading'
            >
                Shqip Computers
            </Typography>
            <Typography
                mt={{ xs: '0.25rem', md: '0.234rem' }}
                level='body-md'
                lineHeight='1.2'
                sx={(theme) => ({
                    fontSize: { md: '0.674rem' },
                    color: theme.palette.neutral[700],
                    maxWidth: { xs: '12.375rem', md: '8.906rem' },
                })}
                component={motion.p}
                variants={heroTextVariants}
                initial='initialSubHeading'
                whileInView='animateSubHeading'
            >
                Lorem ipsum dolor sit amet consectetur. Volutpat eget euismod
                sed urna varius tortor malesuada. Suspendisse nunc augue
                habitant eget in praesent imperdiet.
            </Typography>
        </Stack>
    );
}

export default CompanyInfo;

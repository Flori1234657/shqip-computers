import { Stack, Typography } from '@mui/joy';
import Image from 'src/components/Image';
import SaleRequest from 'src/features/sale-request/SaleRequest';

import Blob from 'src/assets/images/svg/home/make-profit-blob.svg';
import { heroTextVariants } from 'src/animations/home-page/hero-variants';
import { motion } from 'motion/react';

function MakeProfitSection() {
    return (
        <Stack
            alignItems='center'
            gap={{ xs: '2rem', sm: '1.042rem', md: '4rem' }}
            sx={{
                position: 'relative',
                overflow: 'visible',
                mt: { xs: '10.75rem', sm: '15rem', md: '7.313rem' },
            }}
        >
            <Image
                ratio='1.06/1'
                src={Blob}
                width={{ xs: '24.313rem', md: '18.441rem' }}
                alt='blob'
                objectFit='contain'
                otherStyles={{
                    position: 'absolute',
                    top: { xs: '6.125rem', sm: '4rem', md: '4.406rem' },
                    left: { sm: '5rem', md: 'unset' },
                    right: { md: '-2rem' },
                    zIndex: -1,
                }}
            />
            <Typography
                textAlign='center'
                level='title-md'
                sx={(theme) => ({
                    fontSize: { md: '1.681rem' },
                    maxWidth: '15rem',
                    textAlign: 'center',
                    color: theme.palette.primary[800],
                })}
                component={motion.h2}
                variants={heroTextVariants}
                initial='initialHeading'
                whileInView='animateHeading'
            >
                Make profit from your pc 💸
            </Typography>
            <Stack
                gap={{ xs: '2rem', sm: '2.917rem', md: '0.688rem' }}
                alignItems='center'
                direction={{ md: 'row' }}
            >
                <Typography
                    textAlign='center'
                    level='body-lg'
                    sx={(theme) => ({
                        maxWidth: { md: '10.752rem' },
                        fontSize: { md: '0.809rem' },
                        textAlign: { xs: 'center', md: 'left' },
                        order: { md: '2' },
                        color: theme.palette.neutral[800],
                    })}
                    component={motion.p}
                    variants={heroTextVariants}
                    initial='initialSubHeading'
                    whileInView='animateSubHeading'
                >
                    Do you have an old pc that you don’t use anymore? <br /> We
                    can buy it! Fill the form with the necessary information and
                    wait for us to contact you.
                </Typography>
                <SaleRequest />
            </Stack>
        </Stack>
    );
}

export default MakeProfitSection;

import { Button, Stack, Typography } from '@mui/joy';
import { FaArrowRight as RightArrIcon } from 'react-icons/fa6';

import Image from 'src/components/Image';
import Blob from 'src/assets/images/svg/home/build-pc-blob.svg';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';
import { motion } from 'motion/react';
import { heroTextVariants } from 'src/animations/home-page/hero-variants';

function BuildPcSection() {
    const { width } = useWindowDimensions();

    return (
        <Stack
            alignItems='center'
            sx={{
                mt: { xs: '11rem', sm: '15rem', md: '13.688rem' },
                gap: { xs: '2rem', sm: '3.75rem', md: '3.984rem' },

                position: { xs: 'relative' },
            }}
        >
            <Typography
                textAlign='center'
                level='title-md'
                sx={(theme) => ({
                    maxWidth: { xs: '15rem', sm: 'unset' },
                    fontSize: { md: '1.681rem' },
                    textAlign: 'center',
                    color: theme.palette.primary[800],
                })}
                component={motion.h2}
                variants={heroTextVariants}
                initial='initialHeading'
                whileInView='animateHeading'
            >
                Build your own pc 🛠️
            </Typography>
            <Stack
                sx={{
                    flexDirection: { sm: 'row' },
                    alignItems: { md: 'center' },
                    justifyContent: { sm: 'flex-end', md: 'unset' },
                    gap: { md: '3.75rem' },
                }}
            >
                <Image
                    ratio='0.81/1'
                    src={Blob}
                    width={{ xs: '16.938rem', md: '14.916rem' }}
                    alt='blob'
                    objectFit='contain'
                    otherStyles={{
                        position: { xs: 'absolute', md: 'unset' },
                        top: { xs: '4.125rem', sm: '4rem' },
                        zIndex: -1,
                        left: { xs: '-9.1rem', sm: '-5rem' },
                    }}
                    animate={{
                        initial: { opacity: 0 },
                        whileInView: {
                            opacity: 1,
                            transition: { duration: 1 },
                        },
                    }}
                />

                <Stack
                    sx={{
                        width: { sm: '50%', md: '10.752rem' },
                        gap: { xs: '1rem', md: '0.938rem' },
                    }}
                >
                    <Typography
                        level='body-lg'
                        sx={(theme) => ({
                            fontSize: { md: '0.809rem' },
                            textAlign: { xs: 'center', sm: 'left' },
                            color: theme.palette.neutral[800],
                        })}
                        component={motion.p}
                        variants={heroTextVariants}
                        initial='initialSubHeading'
                        whileInView='animateSubHeading'
                    >
                        By simply selecting all the necessary components in our
                        site you can build your own pc from scratch! <br />
                        <br /> We have made this process easy by providing all
                        the necessary components in our store, so that you do
                        not need to search for them everywhere!
                    </Typography>
                    <Button
                        size={width < 900 ? 'md' : 'md2'}
                        sx={{ width: { md: 'fit-content' } }}
                        endDecorator={<RightArrIcon />}
                        component={motion.button}
                        initial={{ rotateX: 360 }}
                        whileInView={{
                            rotateX: 0,
                            transition: { duration: 0.5 },
                        }}
                    >
                        Go To The Store
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default BuildPcSection;

import { Chip, Grid, Stack, Typography } from '@mui/joy';
import { motion } from 'motion/react';
import { heroTextVariants } from 'src/animations/home-page/hero-variants';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function Parameters() {
    const { width } = useWindowDimensions();

    const parameters = [
        {
            id: 'ssdsd2',
            text: '🐏 128Gb Ram',
        },
        {
            id: 'ssdsd3',
            text: '💾 1Tb Ssd',
        },
        {
            id: 'ssdsd5',
            text: '💾 500Gb Hdd',
        },
        {
            id: 'ssdsd6',
            text: '📺 2Gb Dedicated Gpu',
        },
        {
            id: 'ssdsd24',
            text: '🤖 Amd Ryzen 7 Cpu',
        },
    ];

    return (
        <Stack gap={{ xs: '0.25rem', md: '0' }}>
            <Typography
                fontSize={{ xs: '1rem', md: '0.675rem' }}
                fontWeight='600'
                lineHeight='1.6'
                sx={(theme) => ({ color: theme.palette.neutral[500] })}
                component={motion.h3}
                variants={heroTextVariants}
                initial='initialSubHeading'
                animate={{
                    translateY: 0,
                    opacity: 1,
                    transition: { duration: 0.75, delay: 0.35 },
                }}
            >
                Parameters
            </Typography>
            <Grid container gap={{ xs: '0.5rem', md: '0.234rem' }}>
                {parameters.map((parameter, index) => (
                    <Grid
                        key={parameter.id}
                        sx={{ maxHeight: { md: '0.939rem' } }}
                    >
                        <Chip
                            size={width < 900 ? 'md' : 'md2'}
                            color='primary'
                            variant='solid'
                            sx={{
                                borderRadius: { xs: '0.5rem', md: '0.234rem' },
                            }}
                            component={motion.div}
                            variants={heroTextVariants}
                            initial='initialSubHeading'
                            animate={{
                                translateY: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.75,
                                    delay: Number(
                                        `${0.4 + Number(`0.${index}`)}`
                                    ),
                                },
                            }}
                        >
                            {parameter.text}
                        </Chip>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}

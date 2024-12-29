import { Stack, Typography } from '@mui/joy';
import { motion } from 'motion/react';

export default function Price() {
    return (
        <Stack
            direction='row'
            gap={{ xs: '0.5rem', md: '0.234rem' }}
            mt={{ md: '0.375rem' }}
        >
            <Typography
                level='title-md'
                lineHeight='1.6'
                fontSize={{ xs: '1rem', md: '0.563rem' }}
                sx={(theme) => ({ color: theme.palette.danger[500] })}
                component={motion.span}
                initial={{ width: 0, overflow: 'hidden' }}
                animate={{
                    width: 'fit-content',
                    transition: { duration: 0.25, delay: 1 },
                }}
            >
                -$150.00
            </Typography>
            <Typography
                level='title-sm'
                lineHeight='1.6'
                sx={(theme) => ({
                    fontSize: { md: '0.973rem' },
                    color: theme.palette.primary[900],
                })}
                component={motion.h4}
                initial={{ width: 0, overflow: 'hidden' }}
                animate={{
                    width: 'fit-content',
                    transition: { duration: 0.25, delay: 1.25 },
                }}
            >
                $920.00
            </Typography>
        </Stack>
    );
}

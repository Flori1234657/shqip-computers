import { Stack, Typography } from '@mui/joy';
import { motion } from 'motion/react';
import theme from 'src/config/theme';

export default function InformationText() {
    const styles = {
        fontSize: '0.674rem',
        fontWeight: '600',
        color: theme.palette.neutral[500],
    };

    return (
        <Stack direction='row' justifyContent='space-between'>
            <Typography
                sx={{ ...styles }}
                component={motion.h3}
                initial={{ translateX: -50 }}
                animate={{ translateX: 0, transition: { duration: 0.25 } }}
            >
                Product
            </Typography>
            <Typography
                sx={{ ...styles, ml: '6.2rem' }}
                component={motion.h3}
                initial={{ translateX: -50 }}
                animate={{ translateX: 0, transition: { duration: 0.5 } }}
            >
                Quantity
            </Typography>
            <Typography
                sx={{ ...styles, mr: '4rem' }}
                component={motion.h3}
                initial={{ translateX: -50 }}
                animate={{ translateX: 0, transition: { duration: 0.75 } }}
            >
                Price
            </Typography>
        </Stack>
    );
}

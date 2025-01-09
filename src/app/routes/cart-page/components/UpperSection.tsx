import { Stack, Typography } from '@mui/joy';
import BreadCrumb from './components/upper-section/Breadcrumb';
import { motion } from 'motion/react';

export default function UpperSection() {
    return (
        <Stack mt={{ xs: '4.252rem', md: '4.688rem' }} gap={{ xs: '0.25rem' }}>
            <BreadCrumb />
            <Typography
                level='title-md'
                sx={(theme) => ({
                    fontSize: { md: '1.166rem' },
                    color: theme.palette.primary[900],
                })}
                component={motion.h2}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
            >
                Your bag
            </Typography>
        </Stack>
    );
}

import { Breadcrumbs, Link, Typography } from '@mui/joy';
import { motion } from 'motion/react';
import { Link as RouterLink } from 'react-router-dom';

export default function BreadCrumb() {
    return (
        <Breadcrumbs
            aria-label='breadcrumbs'
            sx={{
                padding: 0,
                lineHeight: '1.5',
                fontWeight: '500',
                fontSize: { md: '0.563rem' },
            }}
            component={motion.nav}
            initial={{ width: 0, overflow: 'hidden', maxHeight: '1.25rem' }}
            animate={{
                width: 'fit-content',
                transition: { duration: 0.5 },
            }}
        >
            <Link
                component={RouterLink}
                to='/'
                sx={(theme) => ({ color: theme.palette.neutral[500] })}
            >
                Home
            </Link>

            <Typography sx={(theme) => ({ color: theme.palette.neutral[900] })}>
                Cart
            </Typography>
        </Breadcrumbs>
    );
}

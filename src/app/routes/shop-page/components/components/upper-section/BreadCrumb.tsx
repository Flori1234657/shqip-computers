import { Breadcrumbs, Link, Typography } from '@mui/joy';
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
        >
            <Link
                component={RouterLink}
                to='/'
                sx={(theme) => ({ color: theme.palette.neutral[500] })}
            >
                Home
            </Link>

            <Typography sx={(theme) => ({ color: theme.palette.neutral[900] })}>
                Shop
            </Typography>
        </Breadcrumbs>
    );
}

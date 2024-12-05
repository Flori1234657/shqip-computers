import { Stack, Typography } from '@mui/joy';
import BreadCrumb from './components/upper-section/Breadcrumb';

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
            >
                Your bag
            </Typography>
        </Stack>
    );
}

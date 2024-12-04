import { Stack, Typography } from '@mui/joy';
import BreadCrumb from './components/upper-section/BreadCrumb';

export default function UpperSection() {
    return (
        <Stack mt={{ xs: '4.252rem' }} gap={{ xs: '0.25rem' }}>
            <BreadCrumb />
            <Typography
                level='title-md'
                sx={(theme) => ({ color: theme.palette.primary[900] })}
            >
                Your bag
            </Typography>
        </Stack>
    );
}

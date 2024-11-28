import { Stack } from '@mui/joy';
import UpperSection from './components/UpperSection';
import CategoriesOptions from './components/CategoryOptions';

export default function Filter() {
    return (
        <Stack
            position='fixed'
            sx={(theme) => ({
                zIndex: 2,
                top: 0,
                right: 0,
                overflow: 'scroll',
                p: { xs: '1.5rem', md: '0.703rem' },
                gap: { xs: '2rem' },

                width: '100vw',
                height: '100vh',
                bgcolor: { xs: theme.palette.primary[100] },
            })}
        >
            <UpperSection />
            <CategoriesOptions />
        </Stack>
    );
}

import { Stack } from '@mui/joy';
import UpperSection from './components/UpperSection';
import CategoriesOptions from './components/CategoryOptions';

export default function Filter() {
    return (
        <Stack
            minWidth={{ md: '7.969rem' }}
            position={{ xs: 'fixed', md: 'unset' }}
            sx={(theme) => ({
                zIndex: 2,
                top: 0,
                right: 0,
                overflow: { xs: 'scroll', md: 'unset' },
                p: { xs: '1.5rem', sm: '0 2.5rem', md: '0 0.615rem 0 0' },
                gap: { xs: '2rem', md: '0.938rem' },

                width: { xs: '100vw', md: 'unset' },
                height: { xs: '100vh', md: 'unset' },
                bgcolor: { xs: theme.palette.primary[100], md: 'transparent' },
            })}
        >
            <UpperSection />
            <CategoriesOptions />
        </Stack>
    );
}

import { Stack } from '@mui/joy';
import UpperSection from './components/UpperSection';
import { lazy } from 'react';

const DownSection = lazy(() => import('./components/DownSection'));
const NoItemInTheCard = lazy(() => import('./components/NoItemInTheCard'));

export default function Cart() {
    const isCardEmpty = false;

    return (
        <Stack gap={{ xs: '1.25rem', md: '1.641rem' }}>
            <UpperSection />
            {isCardEmpty ? <NoItemInTheCard /> : <DownSection />}
        </Stack>
    );
}

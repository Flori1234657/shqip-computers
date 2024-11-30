import { Stack } from '@mui/joy';
import UpperSection from './components/UpperSection';
import DownSection from './components/DownSection';

export default function Shop() {
    return (
        <Stack
            mt={{ xs: '4.25rem', md: '4.688rem' }}
            mb={{ xs: '1.5rem', md: '5rem' }}
            gap={{ xs: '1.5rem', md: '2.375rem' }}
        >
            <UpperSection />
            <DownSection />
        </Stack>
    );
}

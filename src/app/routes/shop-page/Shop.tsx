import { Stack } from '@mui/joy';
import UpperSection from './components/UpperSection';
import DownSection from './components/DownSection';

export default function Shop() {
    return (
        <Stack mt={{ xs: '4.25rem' }} gap={{ xs: '1.5rem' }}>
            <UpperSection />
            <DownSection />
        </Stack>
    );
}

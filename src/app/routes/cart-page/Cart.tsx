import { Stack } from '@mui/joy';
import UpperSection from './components/UpperSection';
import DownSection from './components/DownSection';

export default function Cart() {
    return (
        <Stack gap={{ xs: '1.25rem' }}>
            <UpperSection />
            <DownSection />
        </Stack>
    );
}

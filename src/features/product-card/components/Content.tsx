import { Stack } from '@mui/joy';
import UpperSection from './components/UpperSection';
import PriceSection from './components/PriceSection';
import ActionButtons from './components/ActionButtons';

export default function Content() {
    return (
        <Stack
            gap={{ xs: '0.75rem', md: '0.586rem' }}
            p={{ xs: '0.75rem', md: '0.586rem' }}
        >
            <UpperSection />
            <PriceSection />
            <ActionButtons />
        </Stack>
    );
}

import { Stack } from '@mui/joy';
import UpperContent from './components/deals-section/UpperContent';
import DownContent from './components/deals-section/DownContent';

function DealsSection() {
    return (
        <Stack>
            <UpperContent />
            <DownContent />
        </Stack>
    );
}

export default DealsSection;

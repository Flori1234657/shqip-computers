import { Stack } from '@mui/joy';
import Filter from 'src/features/filter/Filter';
import RightContent from './components/down-section/RightContent';

export default function DownSection() {
    return (
        <Stack position='relative'>
            <Filter />
            <RightContent />
        </Stack>
    );
}

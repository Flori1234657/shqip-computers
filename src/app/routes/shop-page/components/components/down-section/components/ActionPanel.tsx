import { Stack } from '@mui/joy';
import SearchBar from './components/action-panel/SearchBar';
import ProductCount from './components/action-panel/ProductCount';
import SortFilterButtons from './components/action-panel/SortFilterButtons';

export default function ActionPanel() {
    return (
        <Stack direction='row' justifyContent='space-between' width='100%'>
            <Stack
                gap={{ xs: '0.5rem', md: '0.703rem' }}
                direction={{ md: 'row' }}
                alignItems={{ md: 'center' }}
            >
                <SearchBar />
                <ProductCount />
            </Stack>
            <SortFilterButtons />
        </Stack>
    );
}

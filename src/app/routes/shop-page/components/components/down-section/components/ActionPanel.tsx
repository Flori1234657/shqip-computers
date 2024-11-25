import { Stack } from '@mui/joy';
import SearchBar from './components/action-panel/SearchBar';
import ProductCount from './components/action-panel/ProductCount';
import SortFilterButtons from './components/action-panel/SortFilterButtons';

export default function ActionPanel() {
    return (
        <Stack direction='row' justifyContent='space-between'>
            <Stack gap={{ xs: '0.5rem' }}>
                <SearchBar />
                <ProductCount />
            </Stack>
            <SortFilterButtons />
        </Stack>
    );
}

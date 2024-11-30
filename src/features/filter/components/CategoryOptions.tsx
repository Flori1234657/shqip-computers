import { Stack } from '@mui/joy';
import PriceFilter from './components/category-options/PriceFilter';
import NewUsedFilter from './components/category-options/NewUsedFilter';
import OptionsMap from './components/category-options/OptionsMap';

export default function CategoryOptions() {
    return (
        <Stack gap={{ xs: '1.5rem', md: '0.703rem' }}>
            <PriceFilter />
            <NewUsedFilter />
            <OptionsMap />
        </Stack>
    );
}

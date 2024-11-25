import { Stack } from '@mui/joy';
import PriceFilter from './components/category-options/PriceFilter';
import NewUsedFilter from './components/category-options/NewUsedFilter';
import OptionsMap from './components/category-options/OptionsMap';

export default function CategoryOptions() {
    return (
        <Stack>
            <PriceFilter />
            <NewUsedFilter />
            <OptionsMap />
        </Stack>
    );
}

import { IconButton, Stack } from '@mui/joy';

import { MdOutlineFilterAlt as FilterIcon } from 'react-icons/md';
import useFilterStore from 'src/features/filter/stores/filter';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';
import SortButton from './components/SortButton';

export default function SortFilterButtons() {
    const { width } = useWindowDimensions();
    const toggleFilterVisibility = useFilterStore(
        (state) => state.setIsFilterVisible
    );

    return (
        <Stack direction='row' gap={{ xs: '0.5rem' }}>
            <SortButton />

            {width < 900 ? (
                <IconButton
                    size='sm'
                    sx={(theme) => ({
                        maxHeight: { xs: '2rem' },
                        bgcolor: theme.palette.primary[900],
                    })}
                    variant='solid'
                    onClick={() => toggleFilterVisibility()}
                >
                    <FilterIcon />
                </IconButton>
            ) : (
                ''
            )}
        </Stack>
    );
}

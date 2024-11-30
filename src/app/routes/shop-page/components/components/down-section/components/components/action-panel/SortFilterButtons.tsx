import { Button, IconButton, Stack } from '@mui/joy';

import { GoSortAsc as SortIcon } from 'react-icons/go';
import { MdOutlineFilterAlt as FilterIcon } from 'react-icons/md';
import useFilterStore from 'src/features/filter/stores/filter';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function SortFilterButtons() {
    const { width } = useWindowDimensions();
    const toggleFilterVisibility = useFilterStore(
        (state) => state.setIsFilterVisible
    );

    return width > 899 ? (
        <Button
            size='xs'
            color='neutral'
            variant='plain'
            sx={(theme) => ({
                py: '0.234rem',
                maxHeight: 'fit-content',
                bgcolor: 'white',
                color: theme.palette.neutral[500],
                borderRadius: '0.352rem',
                boxShadow: '0 0.059rem 0.155rem 0.029rem rgba(0,0,0,0.25)',
            })}
            startDecorator={<SortIcon />}
        >
            Sort
        </Button>
    ) : (
        <Stack direction='row' gap={{ xs: '0.5rem' }}>
            <IconButton
                size='sm'
                sx={{
                    maxHeight: { xs: '2rem' },
                    bgcolor: 'white',
                    boxShadow: '0 0 7.9px 2px rgba(0,0,0,0.5)',
                }}
            >
                <SortIcon />
            </IconButton>
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
        </Stack>
    );
}

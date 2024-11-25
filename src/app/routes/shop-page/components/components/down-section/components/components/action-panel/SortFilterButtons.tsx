import { Button, IconButton, Stack } from '@mui/joy';

import { GoSortAsc as SortIcon } from 'react-icons/go';
import { MdOutlineFilterAlt as FilterIcon } from 'react-icons/md';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function SortFilterButtons() {
    const { width } = useWindowDimensions();

    return width > 899 ? (
        <Button startDecorator={<SortIcon />}>Sort</Button>
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
            >
                <FilterIcon />
            </IconButton>
        </Stack>
    );
}

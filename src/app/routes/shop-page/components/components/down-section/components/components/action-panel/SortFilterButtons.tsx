import { Button, IconButton, Stack } from '@mui/joy';

import { GoSortAsc as SortIcon } from 'react-icons/go';
import { MdOutlineFilterAlt as FilterIcon } from 'react-icons/md';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function SortFilterButtons() {
    const { width } = useWindowDimensions();

    return width > 899 ? (
        <Button startDecorator={<SortIcon />}>Sort</Button>
    ) : (
        <Stack>
            <IconButton>
                <SortIcon />
            </IconButton>
            <IconButton>
                <FilterIcon />
            </IconButton>
        </Stack>
    );
}

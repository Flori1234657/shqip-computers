import { Chip, Stack } from '@mui/joy';
import { useState } from 'react';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function NewUsedFilter() {
    const { width } = useWindowDimensions();
    const [selectedChip, setSelectedChip] = useState({
        chip1: false,
        chip2: true,
    });

    return (
        <Stack direction='row' gap={{ xs: '0.5rem', md: '0.234rem' }}>
            <Chip
                size={width < 900 ? 'lg' : 'xs'}
                color='primary'
                sx={{ py: '0.53rem' }}
                variant={selectedChip.chip1 ? 'solid' : 'outlined'}
                onClick={() => setSelectedChip({ chip1: true, chip2: false })}
            >
                New ✨
            </Chip>
            <Chip
                size={width < 900 ? 'lg' : 'xs'}
                color='primary'
                sx={{ py: '0.53rem' }}
                variant={selectedChip.chip2 ? 'solid' : 'outlined'}
                onClick={() => setSelectedChip({ chip1: false, chip2: true })}
            >
                Used 📟
            </Chip>
        </Stack>
    );
}

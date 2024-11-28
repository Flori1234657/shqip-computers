import { Chip, Stack } from '@mui/joy';
import { useState } from 'react';

export default function NewUsedFilter() {
    const [selectedChip, setSelectedChip] = useState({
        chip1: false,
        chip2: true,
    });

    return (
        <Stack direction='row' gap={{ xs: '0.75rem' }}>
            <Chip
                size='lg'
                color='primary'
                sx={{ py: '0.53rem' }}
                variant={selectedChip.chip1 ? 'solid' : 'outlined'}
                onClick={() => setSelectedChip({ chip1: true, chip2: false })}
            >
                New ✨
            </Chip>
            <Chip
                size='lg'
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

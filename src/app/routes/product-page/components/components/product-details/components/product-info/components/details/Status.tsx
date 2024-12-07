import { Chip, Stack, Typography } from '@mui/joy';

export default function Status() {
    return (
        <Stack gap={{ xs: '0.25rem' }}>
            <Typography
                fontSize={{ xs: '1rem' }}
                fontWeight='600'
                lineHeight='1.6'
                sx={(theme) => ({ color: theme.palette.neutral[500] })}
            >
                Status
            </Typography>
            <Stack direction='row' gap={{ xs: '0.5rem' }}>
                <Chip
                    color='primary'
                    variant='solid'
                    sx={{ borderRadius: { xs: '0.5rem' } }}
                >
                    ⚙️ Used
                </Chip>
                <Chip
                    color='primary'
                    variant='solid'
                    sx={{ borderRadius: { xs: '0.5rem' } }}
                >
                    ✔️ In Stock
                </Chip>
            </Stack>
        </Stack>
    );
}

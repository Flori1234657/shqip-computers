import { Stack, Typography } from '@mui/joy';

export default function Price() {
    return (
        <Stack direction='row' gap={{ xs: '0.5rem' }}>
            <Typography
                level='title-md'
                lineHeight='1.6'
                fontSize={{ xs: '1rem' }}
                sx={(theme) => ({ color: theme.palette.danger[500] })}
            >
                -$150.00
            </Typography>
            <Typography
                level='title-sm'
                lineHeight='1.6'
                sx={(theme) => ({ color: theme.palette.primary[900] })}
            >
                $920.00
            </Typography>
        </Stack>
    );
}

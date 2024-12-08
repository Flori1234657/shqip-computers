import { Stack, Typography } from '@mui/joy';

export default function Price() {
    return (
        <Stack
            direction='row'
            gap={{ xs: '0.5rem', md: '0.234rem' }}
            mt={{ md: '0.375rem' }}
        >
            <Typography
                level='title-md'
                lineHeight='1.6'
                fontSize={{ xs: '1rem', md: '0.563rem' }}
                sx={(theme) => ({ color: theme.palette.danger[500] })}
            >
                -$150.00
            </Typography>
            <Typography
                level='title-sm'
                lineHeight='1.6'
                sx={(theme) => ({
                    fontSize: { md: '0.973rem' },
                    color: theme.palette.primary[900],
                })}
            >
                $920.00
            </Typography>
        </Stack>
    );
}

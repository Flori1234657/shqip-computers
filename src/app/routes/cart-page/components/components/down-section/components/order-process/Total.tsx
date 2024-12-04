import { Stack, Typography } from '@mui/joy';

export default function Total() {
    return (
        <Stack
            direction='row'
            justifyContent='space-between'
            sx={{ borderTop: '0.125rem solid white' }}
        >
            <Typography
                fontFamily='Poppins'
                lineHeight='1.6'
                fontWeight='500'
                sx={{
                    fontSize: { xs: '0.831rem' },
                    color: 'white',
                }}
            >
                TOTAL
            </Typography>
            <Typography
                fontFamily='Poppins'
                lineHeight='1.6'
                fontWeight='500'
                sx={{
                    fontSize: { xs: '0.831rem' },
                    color: 'white',
                }}
            >
                $1,400.00
            </Typography>
        </Stack>
    );
}

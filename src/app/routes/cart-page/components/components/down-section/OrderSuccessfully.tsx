import { Stack, Typography } from '@mui/joy';
import Buttons from './components/success-order/Buttons';

export default function OrderSuccessfully() {
    return (
        <Stack
            alignSelf='center'
            sx={(theme) => ({
                mt: { xs: '2.313rem', md: '0' },
                minWidth: { md: '12.891rem' },
                maxWidth: { sm: '17rem', md: '13.125rem' },
                p: { xs: '1.5rem', md: '0.703rem' },
                gap: { xs: '1rem', md: '0.703rem' },
                borderRadius: { xs: '0.75rem', md: '0.469rem' },
                bgcolor: theme.palette.primary[900],
                boxShadow: {
                    md: '0 0.059rem 0.319rem 0.176rem rgba(0,0,0,0.5)',
                },
            })}
        >
            <Typography
                fontFamily='Poppins'
                fontWeight='500'
                lineHeight='1.2'
                textAlign='center'
                sx={{
                    fontSize: { xs: '1rem', md: '0.809rem' },
                    color: 'white',
                }}
            >
                The order was placed successfully!
            </Typography>
            <Typography
                alignSelf='center'
                fontSize={{ xs: '5rem', md: '2.783rem' }}
                lineHeight='1.2'
            >
                🎉
            </Typography>
            <Buttons />
        </Stack>
    );
}

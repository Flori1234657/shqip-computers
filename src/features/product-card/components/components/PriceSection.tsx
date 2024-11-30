import { Stack, Typography } from '@mui/joy';
import { useLocation } from 'react-router-dom';

export default function PriceSection() {
    const { pathname } = useLocation();
    const hasDiscount = true;

    return (
        <Stack direction='row' gap={{ xs: '0.389rem', md: '0.352rem' }}>
            {hasDiscount ? (
                <Typography
                    variant='solid'
                    color='danger'
                    fontFamily='Poppins'
                    fontWeight='500'
                    lineHeight='1.5'
                    sx={{
                        fontSize: { xs: '0.694rem', md: '0.391rem' },
                        px: { xs: '0.25rem', md: '0.234rem' },
                        maxHeight: 'fit-content',
                        borderRadius: { xs: '0.375rem', md: '0.352rem' },
                        textDecoration: 'line-throught',
                    }}
                >
                    $350.00
                </Typography>
            ) : (
                ''
            )}
            <Typography
                fontFamily='Poppins'
                fontSize={{ xs: '1.2rem', md: '0.81rem' }}
                fontWeight={pathname === '/' ? '500' : '600'}
                lineHeight='1.3'
                sx={(theme) => ({
                    pt: { xs: '0.401rem', md: '0.352rem' },
                    color:
                        pathname === '/' ? 'white' : theme.palette.neutral[800],
                })}
            >
                $230.00
            </Typography>
        </Stack>
    );
}

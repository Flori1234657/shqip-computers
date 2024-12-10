import { useLocation } from 'react-router-dom';
import { Stack, Typography } from '@mui/joy';
import { useContext } from 'react';
import { ProductCardComtext } from '../../context/useProductCardContext';

export default function PriceSection() {
    const productCard = useContext(ProductCardComtext);
    const { pathname } = useLocation();

    return (
        <Stack
            alignSelf='center'
            direction='row'
            gap={{ xs: '0.389rem', md: '0.352rem' }}
        >
            {productCard?.discount ? (
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
                    ${productCard.discount.toFixed(2)}
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
                {productCard?.defaultPrice
                    ? `$${productCard.defaultPrice.toFixed(2)}`
                    : '$000.00'}
            </Typography>
        </Stack>
    );
}

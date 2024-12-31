import { Stack, Typography } from '@mui/joy';
import useCartPageStore from 'src/app/routes/cart-page/store/cart';

export default function Total() {
    const { orderSummary } = useCartPageStore();

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
                    fontSize: { xs: '0.831rem', md: '0.675rem' },
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
                    fontSize: { xs: '0.831rem', md: '0.675rem' },
                    color: 'white',
                }}
            >
                {orderSummary
                    ? `$${(orderSummary.subtotal + orderSummary.shippingFees - orderSummary.discount).toFixed(2)}`
                    : 0}
            </Typography>
        </Stack>
    );
}

import { Stack, Typography } from '@mui/joy';
import { getDiscount } from 'src/app/routes/cart-page/utils/order-summary';
import useDealStore from 'src/app/routes/home-page/store/deal';
import useCartStore from 'src/features/shopping-cart/stores/shoppingCart';

export default function Total() {
    const { cartItems } = useCartStore();
    const { deal } = useDealStore();

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
                -${getDiscount(cartItems!, deal!.percentage)}
            </Typography>
        </Stack>
    );
}

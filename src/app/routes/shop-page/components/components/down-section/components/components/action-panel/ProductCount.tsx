import { Typography } from '@mui/joy';
import useShopStore from 'src/app/routes/shop-page/store/shop';

export default function ProductCount() {
    const { totalProductsCount } = useShopStore();

    return (
        <Typography
            fontSize={{ xs: 'sm', md: '0.563rem' }}
            fontWeight='700'
            sx={(theme) => ({ color: theme.palette.neutral[500] })}
        >
            10 of {totalProductsCount} products
        </Typography>
    );
}

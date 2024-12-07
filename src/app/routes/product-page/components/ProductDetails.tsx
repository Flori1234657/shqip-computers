import { Stack } from '@mui/joy';
import ProductInfo from './components/product-details/ProductInfo';
import Description from './components/product-details/Description';

export default function ProductDetails() {
    return (
        <Stack gap={{ xs: '0.75rem' }}>
            <ProductInfo />
            <Description />
        </Stack>
    );
}

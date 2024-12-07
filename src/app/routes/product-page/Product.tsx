import { Stack } from '@mui/joy';
import ProductDetails from './components/ProductDetails';
import SuggestedProducts from './components/SuggestedProducts';

export default function Product() {
    return (
        <Stack mt={{ xs: '4.25rem' }} gap={{ xs: '3rem' }}>
            <ProductDetails />
            <SuggestedProducts />
        </Stack>
    );
}

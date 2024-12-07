import { Stack } from '@mui/joy';
import Title from './components/suggested-products/Title';
import ProductsMap from './components/suggested-products/ProductsMap';

export default function SuggestedProducts() {
    return (
        <Stack alignItems='center' gap={{ xs: '1.5rem' }}>
            <Title />
            <ProductsMap />
        </Stack>
    );
}

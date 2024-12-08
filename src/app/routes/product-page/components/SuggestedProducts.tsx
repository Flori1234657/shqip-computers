import { Stack } from '@mui/joy';
import Title from './components/suggested-products/Title';
import ProductsMap from './components/suggested-products/ProductsMap';

export default function SuggestedProducts() {
    return (
        <Stack
            alignItems={{ xs: 'center', md: 'flex-start' }}
            gap={{ xs: '1.5rem', md: '0.938rem' }}
        >
            <Title />
            <ProductsMap />
        </Stack>
    );
}

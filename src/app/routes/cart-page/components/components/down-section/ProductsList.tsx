import { Stack } from '@mui/joy';
import InformationText from './components/products-list/InformationText';
import ProductCardsMap from './components/products-list/ProductCardsMap';

export default function ProductsList() {
    return (
        <Stack>
            <InformationText />
            <ProductCardsMap />
        </Stack>
    );
}

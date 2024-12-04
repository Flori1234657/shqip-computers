import { Stack } from '@mui/joy';
import ProductsList from './components/down-section/ProductsList';
import OrderProcess from './components/down-section/OrderProcess';

export default function DownSection() {
    return (
        <Stack gap={{ xs: '4.625rem' }}>
            <ProductsList />
            <OrderProcess />
        </Stack>
    );
}

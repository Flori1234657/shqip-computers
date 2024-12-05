import { Stack } from '@mui/joy';
import ProductsList from './components/down-section/ProductsList';
import OrderProcess from './components/down-section/OrderProcess';

export default function DownSection() {
    return (
        <Stack
            direction={{ md: 'row' }}
            gap={{ xs: '4.625rem', md: '1.641rem' }}
            sx={{
                width: { sm: '21rem', md: '100%' },
                alignSelf: { sm: 'center' },
            }}
        >
            <ProductsList />
            <OrderProcess />
        </Stack>
    );
}

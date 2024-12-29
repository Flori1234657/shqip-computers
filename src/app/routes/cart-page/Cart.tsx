import { Stack } from '@mui/joy';
import UpperSection from './components/UpperSection';
import { lazy } from 'react';
import useCartStore from 'src/features/shopping-cart/stores/shoppingCart';

const DownSection = lazy(() => import('./components/DownSection'));
const NoItemInTheCard = lazy(() => import('./components/NoItemInTheCard'));

export default function Cart() {
    const { cartItems } = useCartStore();

    return (
        <Stack gap={{ xs: '1.25rem', md: '1.641rem' }}>
            <UpperSection />
            {!cartItems || cartItems.length === 0 ? (
                <NoItemInTheCard />
            ) : (
                <DownSection />
            )}
        </Stack>
    );
}

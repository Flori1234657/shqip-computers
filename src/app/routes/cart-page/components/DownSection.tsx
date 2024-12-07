import { Stack } from '@mui/joy';
import ProductsList from './components/down-section/ProductsList';
import OrderSummary from './components/down-section/OrderSummary';
import { lazy } from 'react';

const OrderSuccessfull = lazy(
    () => import('./components/down-section/OrderSuccessfully')
);

export default function DownSection() {
    const isOrderSuccessfull = false;

    return (
        <Stack
            direction={{ md: 'row' }}
            gap={{ xs: '4.625rem', md: '1.641rem' }}
            sx={{
                width: {
                    sm: '21rem',
                    md: isOrderSuccessfull ? 'fit-content' : '100%',
                },
                alignSelf: { sm: 'center' },
            }}
        >
            {isOrderSuccessfull ? (
                <OrderSuccessfull />
            ) : (
                <>
                    <ProductsList />
                    <OrderSummary />
                </>
            )}
        </Stack>
    );
}

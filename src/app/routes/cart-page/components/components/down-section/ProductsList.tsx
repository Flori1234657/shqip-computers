import { lazy, Suspense } from 'react';
import { Stack } from '@mui/joy';
import ProductItemsMap from './components/products-list/ProductItemsMap';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

const InformationText = lazy(
    () => import('./components/products-list/InformationText')
);
const DeleteItemConfirmationModal = lazy(
    () => import('../../modals/DeleteItemConfirmationModal')
);

export default function ProductsList() {
    const { width } = useWindowDimensions();

    return (
        <Stack gap={{ md: '0.469rem' }} sx={{ width: { md: '25.899rem' } }}>
            {width > 899 ? (
                <Suspense fallback=''>
                    <InformationText />
                </Suspense>
            ) : (
                ''
            )}
            <ProductItemsMap />
            <Suspense fallback=''>
                <DeleteItemConfirmationModal />
            </Suspense>
        </Stack>
    );
}

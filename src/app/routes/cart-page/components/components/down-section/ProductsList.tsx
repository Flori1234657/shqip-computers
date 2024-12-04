import { lazy, Suspense } from 'react';
import { Stack } from '@mui/joy';
import ProductCardsMap from './components/products-list/ProductCardsMap';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

const InformationText = lazy(
    () => import('./components/products-list/InformationText')
);

export default function ProductsList() {
    const { width } = useWindowDimensions();

    return (
        <Stack>
            {width > 899 ? (
                <Suspense fallback=''>
                    <InformationText />
                </Suspense>
            ) : (
                ''
            )}
            <ProductCardsMap />
        </Stack>
    );
}

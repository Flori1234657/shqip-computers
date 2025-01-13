import { lazy, Suspense } from 'react';
import { Stack } from '@mui/joy';
import useUiStore from 'src/app/routes/shop-page/store/ui';
import Loader from 'src/components/loader/Loader';
import useShopStore from 'src/app/routes/shop-page/store/shop';

const NoProductsAvailable = lazy(
    () => import('./components/product-card-map/NoProductsAvailable')
);
const Products = lazy(() => import('./components/product-card-map/Products'));

export default function ProductCardsMap() {
    const componentToRender = useUiStore(
        (state) => state.productsSectionComponent
    );
    const { totalProductsCount } = useShopStore();

    return (
        <Stack gap={{ xs: '2.5rem', md: '1.641rem' }} alignItems='center'>
            {componentToRender === 'loader' ? (
                <Loader />
            ) : (
                <Suspense fallback=''>
                    {componentToRender === 'feedback-message' ? (
                        <NoProductsAvailable text='We run into a problem while fetching the products 📡' />
                    ) : !totalProductsCount || totalProductsCount === 0 ? (
                        <NoProductsAvailable />
                    ) : (
                        <Products />
                    )}
                </Suspense>
            )}
        </Stack>
    );
}

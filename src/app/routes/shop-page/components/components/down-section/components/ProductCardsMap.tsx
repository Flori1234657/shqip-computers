import { Stack } from '@mui/joy';
import Products from './components/product-card-map/Products';
import Loader from 'src/components/loader/Loader';
import NoProductsAvailable from './components/product-card-map/NoProductsAvailable';
import useUiStore from 'src/app/routes/shop-page/store/ui';

export default function ProductCardsMap() {
    const componentToRender = useUiStore(
        (state) => state.productsSectionComponent
    );

    return (
        <Stack gap={{ xs: '2.5rem', md: '1.641rem' }} alignItems='center'>
            {componentToRender === 'loader' ? (
                <Loader />
            ) : componentToRender === 'feedback-message' ? (
                <NoProductsAvailable text='We run into a problem while fetching the products 📡' />
            ) : (
                <Products />
            )}
        </Stack>
    );
}

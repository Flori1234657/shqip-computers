import { Stack } from '@mui/joy';
import ProductInfo from './components/product-details/ProductInfo';
import Description from './components/product-details/Description';
import { SingleProductPageContext } from '../context/useSingleProductPageContext';
import { useParams } from 'react-router-dom';
import useProductStore from 'src/stores/products';

export default function ProductDetails() {
    const params = useParams();
    const { products } = useProductStore();

    return (
        <Stack
            gap={{ xs: '0.75rem', md: '1.641rem' }}
            sx={{ maxWidth: { md: '26.133rem' } }}
        >
            <SingleProductPageContext.Provider
                value={products!.find(
                    (product) => product.documentId === params.id
                )}
            >
                <ProductInfo />
                <Description />
            </SingleProductPageContext.Provider>
        </Stack>
    );
}

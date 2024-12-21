import useProductStore from 'src/stores/products';
import { getNextProducts } from '../api/getProducts';
import useShopStore from '../store/shop';
import useUiStore from '../store/ui';

export default function useFetchProducts() {
    const setTotalProductsCount = useShopStore(
        (state) => state.setTotalProducts
    );
    const setProducts = useProductStore((state) => state.setProducts);
    const setProductComponent = useUiStore(
        (state) => state.setProductsSectionComponent
    );

    const getAndSetProducts = async (signal: AbortSignal, page: number) => {
        setProductComponent('loader');

        try {
            const response = await getNextProducts(page, signal);

            setTotalProductsCount(response.meta.pagination.total);
            setProducts(response.data);

            setProductComponent('product-cards');
        } catch (error) {
            setProductComponent('feedback-message');
            console.error(error);
        }
    };

    return { getAndSetProducts };
}

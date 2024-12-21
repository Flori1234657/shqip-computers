import useProductStore from 'src/stores/products';
import { getNextProducts } from '../api/getProducts';
import useShopStore from '../store/shop';

export default function useFetchProducts() {
    const setTotalProductsCount = useShopStore(
        (state) => state.setTotalProducts
    );
    const setProducts = useProductStore((state) => state.setProducts);

    const getAndSetProducts = async (signal: AbortSignal, page: number) => {
        try {
            const response = await getNextProducts(page, signal);

            setTotalProductsCount(response.meta.pagination.total);
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return { getAndSetProducts };
}

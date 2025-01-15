/* eslint-disable @stylistic/js/indent */
import useProductStore from 'src/stores/products';
import { getNextProducts, getProductsByCategory } from '../api/getProducts';
import useShopStore from '../store/shop';
import useUiStore from '../store/ui';
import { useParams } from 'react-router-dom';
import useFilterStore from 'src/features/filter/stores/filter';

export default function useFetchProducts() {
    const queryParams = useParams();
    const { filterQuery } = useFilterStore();

    const { setTotalProducts, searchValue } = useShopStore();
    const setProducts = useProductStore((state) => state.setProducts);
    const setProductComponent = useUiStore(
        (state) => state.setProductsSectionComponent
    );

    const getAndSetProducts = async (signal: AbortSignal, page: number) => {
        setProductComponent('loader');

        try {
            const response = queryParams.categoryId
                ? await getProductsByCategory(
                      page,
                      queryParams.categoryId,
                      signal,
                      queryParams.typeId || '',
                      searchValue || '',
                      filterQuery || ''
                  )
                : await getNextProducts(
                      page,
                      signal,
                      searchValue || '',
                      filterQuery || ''
                  );

            setTotalProducts(response.meta.pagination.total);
            setProducts(response.data);

            setProductComponent('product-cards');
        } catch (error) {
            setProductComponent('feedback-message');
            console.error(error);
        }
    };

    return { getAndSetProducts };
}

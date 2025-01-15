/* eslint-disable @stylistic/js/indent */
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useFilterStore from 'src/features/filter/stores/filter';
import useProductStore from 'src/stores/products';
import useShopStore from '../store/shop';
import { filterByCategory, filterByFilterOption } from '../utils/filters';

export default function useRenderProducts(pageSize: number) {
    const productsData = useProductStore((state) => state.products);
    const { currentPage, searchValue } = useShopStore();

    const queryParams = useParams();
    const { filterQuery } = useFilterStore();

    const currentProductsData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;

        const filteredProducts = (
            queryParams.categoryId
                ? //@ts-expect-error only need to globaly declare types
                  filterByCategory(productsData!, queryParams)
                : productsData
        )!
            .filter((product) =>
                searchValue
                    ? product.name
                          .toLowerCase()
                          .includes(searchValue.toLowerCase())
                    : true
            )
            .filter((product) =>
                filterQuery ? filterByFilterOption(filterQuery, product) : true
            );

        return filteredProducts.slice(firstPageIndex, lastPageIndex);
    }, [
        currentPage,
        productsData,
        searchValue,
        queryParams,
        filterQuery,
        pageSize,
    ]);

    return { currentProductsData };
}

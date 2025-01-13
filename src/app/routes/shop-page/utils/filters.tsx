import { Product } from 'src/types/product';

export const filterByCategory = (
    products: Product[],
    queryParams: { categoryId: string; typeId: string | null }
) => {
    if (queryParams.typeId)
        return products.filter(
            (product) =>
                product.category === queryParams.categoryId &&
                product.type === queryParams.typeId
        );

    return products.filter(
        (product) => product.category === queryParams.categoryId
    );
};

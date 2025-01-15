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

export const filterByFilterOption = (filterQuery: string, product: Product) => {
    const pricesFilter = getMinMaxPrices(filterQuery);
    if (
        typeof pricesFilter.min === 'number' &&
        typeof pricesFilter.max === 'number'
    )
        return (
            product.defaultPrice >= pricesFilter.min &&
            product.defaultPrice <= pricesFilter.max
        );

    return false;
};

function getMinMaxPrices(queryString: string) {
    const regex = /filters\[defaultPrice\]\[\$(gte|lte)\]=(\d+)/g;

    const prices: { gte?: number; lte?: number } = {};
    let match: RegExpExecArray | null;

    while ((match = regex.exec(queryString)) !== null) {
        if (match[1] === 'gte' || match[1] === 'lte') {
            prices[match[1]] = parseInt(match[2], 10);
        }
    }

    return {
        min: prices.gte ?? null,
        max: prices.lte ?? null,
    };
}

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
    const usedFilter = getUsedFilter(filterQuery);

    const matchesPrice =
        typeof pricesFilter.min === 'number' &&
        typeof pricesFilter.max === 'number'
            ? product.defaultPrice >= pricesFilter.min &&
              product.defaultPrice <= pricesFilter.max
            : true;

    const matchesUsed =
        typeof usedFilter === 'boolean' ? product.used === usedFilter : true;

    return matchesPrice && matchesUsed;
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

function getUsedFilter(queryString: string): boolean | null {
    const regex = /filters\[used\]=(true|false)/;
    const match = regex.exec(queryString);

    if (match) {
        return match[1] === 'true';
    }

    return null;
}

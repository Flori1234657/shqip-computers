import { Product } from 'src/types/product';

/** Remove previous products that match newFetched products
 * @return {Product[]} -  [...newFetchedProducts, ...previousFiltredProducts]
 */

export const findAndFilterProducts = (
    previousPoducts: Product[],
    newFetchedProducts: Product[]
): Product[] => {
    const previousFiltredProducts = previousPoducts.filter(
        (previousProduct) => {
            return !newFetchedProducts.some(
                (newProducts) => newProducts.id === previousProduct.id
            );
        }
    );
    return [...previousFiltredProducts, ...newFetchedProducts];
};

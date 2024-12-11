/** 
   This hook is used to fire the search
   functionality 🌐. It search both at
   products store also in the server.
 */

import { useState } from 'react';
import useProductStore from 'src/stores/products';
import { Product } from 'src/types/product';
import { getMatchingProducts } from '../api/getMatchingProducts';

export default function useSearch() {
    const [results, setResults] = useState<Product[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const { products, setProducts } = useProductStore();

    const searchPoductsStore = (valueToSearch: string) => {
        if (!products || products.length < 1) return null;

        const filterdResults = products.filter((product) =>
            product.name.toLowerCase().includes(valueToSearch.toLowerCase())
        );

        if (filterdResults.length > 0) return filterdResults;
        return null;
    };

    const search = async (value: string) => {
        const productStoreResults = searchPoductsStore(value);

        if (!productStoreResults) {
            const serverResults = await getMatchingProducts(
                `[name][$contains]=${value}`
            );

            if (serverResults.length > 0) setProducts(serverResults);
            setResults(serverResults);
        } else {
            const excludeFromSearch = productStoreResults.map(
                (product) => `filters[documentId][$notIn]=${product.documentId}`
            );

            const serverResults = await getMatchingProducts(
                `[name][$contains]=${value}&${excludeFromSearch.join('&')}`
            );

            if (serverResults.length > 0) setProducts(serverResults);
            setResults([...serverResults, ...productStoreResults]);
        }

        setIsLoading(false);
    };

    return { search, results, isLoading, setIsLoading };
}

import useSelectProductStore from '../store/select';
import useDealStore from '../store/deal';

export default function useSelectedDealProduct() {
    const selectedProduct = useSelectProductStore(
        (state) => state.selectedProduct
    );
    const dealProducts = useDealStore((state) => state.dealProducts?.data);

    const findSelectedProduct = () => {
        if (dealProducts && selectedProduct) {
            const productFinded = dealProducts.filter(
                (product) => product.documentId === selectedProduct
            );
            return productFinded[0];
        }
        if (dealProducts && !selectedProduct) return dealProducts[0];

        return undefined;
    };

    return { findSelectedProduct };
}

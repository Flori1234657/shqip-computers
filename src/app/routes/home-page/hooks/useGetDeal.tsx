import useDealStore from '../store/deal';
import useSimpleAlertStore from 'src/features/alert-feedback-simple/store/simpleAlert';
import useRenderStore from 'src/stores/render';
import { hasDealExpired } from '../utils/deal';
import { getDeal, getDealProducts } from '../api/getDeal';
import useProductStore from 'src/stores/products';

export default function useGetDeal() {
    const useDeal = useDealStore();
    const setProducts = useProductStore((state) => state.setProducts);

    const fillAlert = useSimpleAlertStore((state) => state.setData);
    const showAlert = useRenderStore(
        (state) => state.toggleIsSimpleAlertFeedbackVisible
    );
    // find a better way
    let dontSetAlert = false;

    const requestDeal = async (signal: AbortSignal) => {
        if (!useDeal.deal || hasDealExpired(useDeal.deal.expireDate)) {
            try {
                const dealData = await getDeal(signal);

                useDeal.setDeal(dealData);
            } catch (error) {
                if (!dontSetAlert) {
                    fillAlert(
                        'danger',
                        error instanceof Error
                            ? error.message
                            : 'Unexpected error'
                    );
                    showAlert();
                    dontSetAlert = true;
                }
            }
        }
    };

    const requestDealProducts = async (
        signal: AbortSignal,
        nextPage?: number
    ) => {
        if (!useDeal.dealProducts || nextPage)
            try {
                const dealProducts = await getDealProducts(
                    nextPage && useDeal.dealProducts ? nextPage : 1,
                    signal
                );

                useDeal.setDealProducts(dealProducts.data, dealProducts.meta);
                setProducts(dealProducts.data);
            } catch (error) {
                if (!dontSetAlert) {
                    fillAlert(
                        'danger',
                        error instanceof Error
                            ? error.message
                            : 'Unexpected error'
                    );
                    showAlert();
                    dontSetAlert = true;
                }
            }
    };

    return { requestDeal, requestDealProducts };
}

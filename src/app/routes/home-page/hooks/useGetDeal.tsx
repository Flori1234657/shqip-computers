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

    const requestDeal = async () => {
        if (!useDeal.deal || hasDealExpired(useDeal.deal.expireDate)) {
            try {
                const dealData = await getDeal();

                useDeal.setDeal(dealData);
            } catch (error) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                fillAlert('danger', error.message);
                showAlert();
            }
        }
    };

    const requestDealProducts = async (nextPage?: number) => {
        if (!useDeal.dealProducts || nextPage)
            try {
                const dealProducts = await getDealProducts(
                    nextPage && useDeal.dealProducts ? nextPage : 1
                );

                useDeal.setDealProducts(dealProducts.data, dealProducts.meta);
                setProducts(dealProducts.data);
            } catch (error) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                fillAlert('danger', error.message);
                showAlert();
            }
    };

    return { requestDeal, requestDealProducts };
}

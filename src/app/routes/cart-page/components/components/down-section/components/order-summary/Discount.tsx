import { Stack } from '@mui/joy';
import InformationHeading from './components/InformationHeading';
import TextValue from './components/TextValue';
import ActionText from './components/ActionText';
import { lazy, Suspense } from 'react';
import useUiStore from 'src/app/routes/cart-page/store/ui';
import useCartPageStore from 'src/app/routes/cart-page/store/cart';

const Modal = lazy(
    () =>
        import('../../../../modals/order-modals/discount-details/DiscountModal')
);

export default function Discount() {
    const { orderSummary } = useCartPageStore();
    const { showDiscountModal, toggleShowDiscountModal } = useUiStore();

    return (
        <Stack direction='row' justifyContent='space-between'>
            <Stack>
                <InformationHeading text='Discount' />
                {orderSummary && orderSummary.discount > 0 ? (
                    <ActionText
                        text={'view details'}
                        action={toggleShowDiscountModal}
                    />
                ) : (
                    ''
                )}
            </Stack>
            <TextValue
                text={
                    orderSummary ? `-$${orderSummary.discount.toFixed(2)}` : '0'
                }
            />
            <Suspense fallback=''>
                {showDiscountModal ? <Modal /> : ''}
            </Suspense>
        </Stack>
    );
}

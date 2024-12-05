import { Stack } from '@mui/joy';
import InformationHeading from './components/InformationHeading';
import TextValue from './components/TextValue';
import ActionText from './components/ActionText';
import { lazy, Suspense } from 'react';
import useUiStore from 'src/app/routes/cart-page/store/ui';

const Modal = lazy(
    () =>
        import('../../../../modals/order-modals/discount-details/DiscountModal')
);

export default function Discount() {
    const hasDiscount = true;
    const { showDiscountModal, toggleShowDiscountModal } = useUiStore();

    return (
        <Stack direction='row' justifyContent='space-between'>
            <Stack>
                <InformationHeading text='Discount' />
                {hasDiscount ? (
                    <ActionText
                        text={'view details'}
                        action={toggleShowDiscountModal}
                    />
                ) : (
                    ''
                )}
            </Stack>
            <TextValue text={hasDiscount ? '-$50.00' : '0'} />
            <Suspense fallback=''>
                {showDiscountModal ? <Modal /> : ''}
            </Suspense>
        </Stack>
    );
}

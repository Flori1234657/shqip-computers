import { Stack } from '@mui/joy';
import InformationHeading from './components/InformationHeading';
import TextValue from './components/TextValue';
import ActionText from './components/ActionText';
import useUiStore from 'src/app/routes/cart-page/store/ui';
import { lazy, Suspense } from 'react';
import useCartPageStore from 'src/app/routes/cart-page/store/cart';
import useShippingAddressStore from 'src/app/routes/cart-page/store/shippingAddress';

const ShippingAddressModal = lazy(
    () =>
        import(
            '../../../../modals/order-modals/shipping-address/ShippingAddressModal'
        )
);

export default function ShippingFees() {
    const { orderSummary } = useCartPageStore();
    const { shippingAddress } = useShippingAddressStore();
    const { showShippingAddressModal, toggleShippingAddressModal } =
        useUiStore();

    return (
        <Stack direction='row' justifyContent='space-between'>
            <Stack>
                <InformationHeading text='Shipping fees' />
                <ActionText
                    text={
                        shippingAddress
                            ? 'change your shipping address'
                            : '+ add your shipping address'
                    }
                    action={toggleShippingAddressModal}
                />
            </Stack>
            {shippingAddress && (
                <TextValue text={`$${orderSummary?.shippingFees.toFixed(2)}`} />
            )}
            {showShippingAddressModal ? (
                <Suspense fallback=''>
                    <ShippingAddressModal />
                </Suspense>
            ) : (
                ''
            )}
        </Stack>
    );
}

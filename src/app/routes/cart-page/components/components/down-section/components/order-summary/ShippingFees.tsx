import { Stack } from '@mui/joy';
import InformationHeading from './components/InformationHeading';
import TextValue from './components/TextValue';
import ActionText from './components/ActionText';
import useUiStore from 'src/app/routes/cart-page/store/ui';
import { lazy, Suspense } from 'react';

const ShippingAddressModal = lazy(
    () =>
        import(
            '../../../../modals/order-modals/shipping-address/ShippingAddressModal'
        )
);

export default function ShippingFees() {
    const hasShippingAddress = false;
    const { showShippingAddressModal, toggleShippingAddressModal } =
        useUiStore();

    return (
        <Stack direction='row' justifyContent='space-between'>
            <Stack>
                <InformationHeading text='Shipping fees' />
                <ActionText
                    text={
                        hasShippingAddress
                            ? 'change your shipping address'
                            : '+ add your shipping address'
                    }
                    action={toggleShippingAddressModal}
                />
            </Stack>
            {hasShippingAddress && <TextValue text='$30.00' />}
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

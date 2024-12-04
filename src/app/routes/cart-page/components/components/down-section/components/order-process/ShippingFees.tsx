import { Stack } from '@mui/joy';
import InformationHeading from './components/InformationHeading';
import TextValue from './components/TextValue';
import ActionText from './components/ActionText';

export default function ShippingFees() {
    const hasShippingAddress = false;

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
                />
            </Stack>
            {hasShippingAddress && <TextValue text='$30.00' />}
        </Stack>
    );
}

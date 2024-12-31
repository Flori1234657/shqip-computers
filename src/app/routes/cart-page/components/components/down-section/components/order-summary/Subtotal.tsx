import { Stack } from '@mui/joy';
import InformationHeading from './components/InformationHeading';
import TextValue from './components/TextValue';
import useCartPageStore from 'src/app/routes/cart-page/store/cart';

export default function Subtotal() {
    const { orderSummary } = useCartPageStore();

    return (
        <Stack direction='row' justifyContent='space-between'>
            <InformationHeading text='Subtotal' />
            <TextValue text={`$${orderSummary?.subtotal.toFixed(2)}`} />
        </Stack>
    );
}

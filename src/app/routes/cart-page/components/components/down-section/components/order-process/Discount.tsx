import { Stack } from '@mui/joy';
import InformationHeading from './components/InformationHeading';
import TextValue from './components/TextValue';
import ActionText from './components/ActionText';

export default function Discount() {
    const hasDiscount = true;

    return (
        <Stack direction='row' justifyContent='space-between'>
            <Stack>
                <InformationHeading text='Discount' />
                {hasDiscount ? <ActionText text={'view details'} /> : ''}
            </Stack>
            <TextValue text={hasDiscount ? '-$50.00' : '0'} />
        </Stack>
    );
}

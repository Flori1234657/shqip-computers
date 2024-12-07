import { Stack } from '@mui/joy';
import InformationHeading from './components/InformationHeading';
import TextValue from './components/TextValue';

export default function Subtotal() {
    return (
        <Stack direction='row' justifyContent='space-between'>
            <InformationHeading text='Subtotal' />
            <TextValue text='$493.00' />
        </Stack>
    );
}

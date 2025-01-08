import { Button, Stack } from '@mui/joy';
import {
    MdOutlineLocalPrintshop as PrinterIcon,
    MdClose as CloseIcon,
} from 'react-icons/md';
import useCartStore from 'src/features/shopping-cart/stores/shoppingCart';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function Buttons() {
    const { width } = useWindowDimensions();
    const { emptyTheCart } = useCartStore();

    return (
        <Stack gap={{ xs: '0.5rem', md: '0.234rem' }}>
            <Button
                fullWidth
                size={width < 900 ? 'md' : 'md2'}
                endDecorator={<PrinterIcon />}
                onClick={emptyTheCart} // to print the bill create it using css
            >
                Print The Bill
            </Button>
            <Button
                variant='outlined'
                color='neutral'
                fullWidth
                size={width < 900 ? 'md' : 'md2'}
                endDecorator={<CloseIcon />}
                onClick={emptyTheCart}
            >
                Close
            </Button>
        </Stack>
    );
}

import { Button, Stack } from '@mui/joy';
import {
    MdOutlineShoppingCart as CartIcon,
    MdDeleteOutline as DeleteIcon,
} from 'react-icons/md';
import useCartStore from '../stores/shoppingCart';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

function Buttons() {
    const { width } = useWindowDimensions();
    // to disable this function for working do it reading the value of confiramtion modal in the sesssion
    const { toggleShowEmptyCartMessage, showEmptyCartMessage, emptyTheCart } =
        useCartStore();

    return (
        <Stack
            gap={{ xs: '0.75rem', md: '0.234rem' }}
            pt={{ xs: '1.5rem', md: '3.188rem' }}
        >
            <Button
                endDecorator={<CartIcon />}
                size={width < 900 ? 'md' : 'md2'}
            >
                View Cart
            </Button>
            <Button
                endDecorator={<DeleteIcon />}
                size={width < 900 ? 'md' : 'md2'}
                color='danger'
                onClick={() =>
                    showEmptyCartMessage !== 'dont-show-again'
                        ? toggleShowEmptyCartMessage(true)
                        : emptyTheCart()
                }
            >
                Empty the Cart
            </Button>
        </Stack>
    );
}

export default Buttons;

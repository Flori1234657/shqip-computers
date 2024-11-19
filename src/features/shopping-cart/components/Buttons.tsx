import { Button, Stack } from '@mui/joy';
import {
    MdOutlineShoppingCart as CartIcon,
    MdDeleteOutline as DeleteIcon,
} from 'react-icons/md';
import useCartStore from '../stores/shoppingCart';

function Buttons() {
    // to disable this function for working do it reading the value of confiramtion modal in the sesssion
    const showConfiramtionModal = useCartStore(
        (state) => state.toggleShowEmptyCartMessage
    );

    return (
        <Stack gap={{ xs: '0.75rem' }}>
            <Button endDecorator={<CartIcon />}>View Cart</Button>
            <Button
                endDecorator={<DeleteIcon />}
                color='danger'
                onClick={() => showConfiramtionModal(true)}
            >
                Empty the Cart
            </Button>
        </Stack>
    );
}

export default Buttons;

import { IconButton } from '@mui/joy';
import { FaRegTrashCan as DeleteIcon } from 'react-icons/fa6';
import useUiStore from 'src/app/routes/cart-page/store/ui';
import useCartStore from 'src/features/shopping-cart/stores/shoppingCart';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function DeleteButton({ id }: { id: string }) {
    const { width } = useWindowDimensions();
    const {
        showDeleteItemConfiramtionModal,
        toggleShowDeleteItemConfiramtionModal,
    } = useUiStore();
    const { decrementCartItems } = useCartStore();

    return (
        <IconButton
            variant='solid'
            color='danger'
            size={width < 900 ? 'xs2' : 'xs4'}
            onClick={() => {
                if (showDeleteItemConfiramtionModal.modal !== 'dont-show-again')
                    toggleShowDeleteItemConfiramtionModal(
                        true,
                        'Lenovo thinkpad g13',
                        id
                    );
                else decrementCartItems(id, true);
            }}
        >
            <DeleteIcon />
        </IconButton>
    );
}

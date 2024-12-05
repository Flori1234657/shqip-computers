import useCartStore from '../stores/shoppingCart';
import {
    MdDeleteOutline as DeleteIcon,
    MdOutlineCancel as CancelIcon,
} from 'react-icons/md';
import ConfirmationModal from 'src/components/modals/ConfirmationModal';

function EmptyCartConfirmationModal() {
    const modalVisibility = useCartStore((state) => state.showEmptyCartMessage);

    return (
        <ConfirmationModal
            modalVisibility={modalVisibility}
            text='Are you sure that you want to empty the card?'
            yesIcon={<DeleteIcon />}
            noIcon={<CancelIcon />}
        />
    );
}

export default EmptyCartConfirmationModal;

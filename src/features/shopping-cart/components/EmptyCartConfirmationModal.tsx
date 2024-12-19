import { useState } from 'react';
import useCartStore from '../stores/shoppingCart';
import {
    MdDeleteOutline as DeleteIcon,
    MdOutlineCancel as CancelIcon,
} from 'react-icons/md';
import ConfirmationModal from 'src/components/modals/ConfirmationModal';

function EmptyCartConfirmationModal() {
    const modalVisibility = useCartStore((state) => state.showEmptyCartMessage);
    const { emptyTheCart, toggleShowEmptyCartMessage } = useCartStore();

    const [dontShowTheMessageAgain, setDontShowTheMessageAgain] =
        useState(false);

    return (
        <ConfirmationModal
            modalVisibility={modalVisibility}
            text='Are you sure that you want to empty the card?'
            yesIcon={<DeleteIcon />}
            noIcon={<CancelIcon />}
            yesAction={() => {
                emptyTheCart();
                toggleShowEmptyCartMessage(
                    dontShowTheMessageAgain ? 'dont-show-again' : false
                );
            }}
            noAction={() =>
                toggleShowEmptyCartMessage(
                    dontShowTheMessageAgain ? 'dont-show-again' : false
                )
            }
            checkboxAction={() => setDontShowTheMessageAgain((prev) => !prev)}
        />
    );
}

export default EmptyCartConfirmationModal;

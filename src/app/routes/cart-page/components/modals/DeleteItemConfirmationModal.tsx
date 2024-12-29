import useUiStore from 'src/app/routes/cart-page/store/ui';
import Modal from 'src/components/modals/ConfirmationModal';
import {
    MdDeleteOutline as DeleteIcon,
    MdOutlineCancel as CancelIcon,
} from 'react-icons/md';
import useCartStore from 'src/features/shopping-cart/stores/shoppingCart';
import { useState } from 'react';

export default function DeleteItemConfirmationModal() {
    const {
        showDeleteItemConfiramtionModal: item,
        toggleShowDeleteItemConfiramtionModal,
    } = useUiStore();
    const { decrementCartItems } = useCartStore();
    const [dontShowTheMessageAgain, setDontShowTheMessageAgain] =
        useState(false);

    const closeModal = (yesAction: boolean) => {
        if (yesAction) decrementCartItems(item.itemToDeleteId!, true);

        toggleShowDeleteItemConfiramtionModal(
            dontShowTheMessageAgain
                ? 'dont-show-again'
                : dontShowTheMessageAgain
        );
    };

    return (
        <Modal
            modalVisibility={item.modal}
            text={`Are you sure that you want to delete ${item.itemToDeleteName}?`}
            yesIcon={<DeleteIcon />}
            noIcon={<CancelIcon />}
            yesAction={() => closeModal(true)}
            noAction={() => closeModal(false)}
            checkboxAction={() => setDontShowTheMessageAgain((prev) => !prev)}
        />
    );
}

import useUiStore from 'src/app/routes/cart-page/store/ui';
import Modal from 'src/components/modals/ConfirmationModal';
import {
    MdDeleteOutline as DeleteIcon,
    MdOutlineCancel as CancelIcon,
} from 'react-icons/md';

export default function DeleteConfirmationModal() {
    const { showDeleteItemConfiramtionModal } = useUiStore();

    return (
        <Modal
            modalVisibility={showDeleteItemConfiramtionModal.modal}
            text={`Are you sure that you want to delete ${showDeleteItemConfiramtionModal.itemToDelete}?`}
            yesIcon={<DeleteIcon />}
            noIcon={<CancelIcon />}
        />
    );
}

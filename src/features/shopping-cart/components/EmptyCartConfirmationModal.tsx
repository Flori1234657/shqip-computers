import {
    Button,
    Checkbox,
    Modal,
    ModalDialog,
    Stack,
    Typography,
} from '@mui/joy';
import useCartStore from '../stores/shoppingCart';
import {
    MdDeleteOutline as DeleteIcon,
    MdOutlineCancel as CancelIcon,
} from 'react-icons/md';

function EmptyCartConfirmationModal() {
    const modalVisibility = useCartStore((state) => state.showEmptyCartMessage);

    return (
        <Modal
            open={
                modalVisibility !== 'dont-show-again' ? modalVisibility : false
            }
        >
            <ModalDialog
                sx={(theme) => ({
                    bgcolor: theme.palette.primary[900],
                    borderRadius: '0.75rem',
                    boxShadow: theme.shadow.overlayModal,
                    p: { xs: '1rem' },
                })}
            >
                <Stack gap={{ xs: '1rem' }}>
                    <Typography
                        level='title-md'
                        fontSize='1rem'
                        fontWeight='400'
                        sx={{ color: 'white' }}
                    >
                        Are you sure that you want to empty the card?
                    </Typography>
                    <Stack gap={{ xs: '0.75rem' }}>
                        <Stack direction='row' gap={{ xs: '0.75rem' }}>
                            <Button
                                variant='outlined'
                                color='danger'
                                endDecorator={<DeleteIcon />}
                            >
                                Yes
                            </Button>
                            <Button endDecorator={<CancelIcon />}>No</Button>
                        </Stack>
                        <Checkbox
                            color='success'
                            size='sm'
                            sx={(theme) => ({
                                color: theme.palette.primary[200],
                                fontFamily: 'Poppins',
                            })}
                            label="Don't ask me again"
                        />
                    </Stack>
                </Stack>
            </ModalDialog>
        </Modal>
    );
}

export default EmptyCartConfirmationModal;

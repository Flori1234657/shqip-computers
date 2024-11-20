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
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

function EmptyCartConfirmationModal() {
    const { width } = useWindowDimensions();
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
                    borderRadius: { xs: '0.75rem', md: '0.469rem' },
                    boxShadow: theme.shadow.overlayModal,
                    p: { xs: '1rem', md: '0.938rem' },
                    minWidth: 'fit-content',
                })}
            >
                <Stack
                    gap={{ xs: '1rem', md: '0.938rem' }}
                    maxWidth={{ md: '12.158rem' }}
                >
                    <Typography
                        level='title-md'
                        fontSize={{ xs: '1rem', md: '0.809rem' }}
                        fontWeight='400'
                        sx={{ color: 'white' }}
                    >
                        Are you sure that you want to empty the card?
                    </Typography>
                    <Stack gap={{ xs: '0.75rem', md: '0.352rem' }}>
                        <Stack
                            direction='row'
                            gap={{ xs: '0.75rem', md: '0.469rem' }}
                        >
                            <Button
                                variant='outlined'
                                color='danger'
                                endDecorator={<DeleteIcon />}
                                size={width < 900 ? 'md' : 'md2'}
                            >
                                Yes
                            </Button>
                            <Button
                                endDecorator={<CancelIcon />}
                                size={width < 900 ? 'md' : 'md2'}
                            >
                                No
                            </Button>
                        </Stack>
                        <Checkbox
                            color='success'
                            size={width < 900 ? 'sm' : 'md2'}
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

import {
    Alert,
    IconButton,
    Modal,
    ModalDialog,
    Stack,
    Typography,
} from '@mui/joy';
import { MdClose as CloseIcpm } from 'react-icons/md';
import useAlertStore from './store/alert';

export default function AlertFeedback() {
    const { type, description } = useAlertStore();

    return (
        <Modal open={true}>
            <ModalDialog>
                <Alert
                    sx={{ alignItems: 'flex-start' }}
                    variant='soft'
                    color={type === 'Success' ? 'success' : 'danger'}
                    invertedColors
                    endDecorator={
                        <IconButton variant='soft'>
                            <CloseIcpm />
                        </IconButton>
                    }
                >
                    <Stack>
                        <Typography>{type}!</Typography>
                        <Typography level='body-sm'>{description}</Typography>
                    </Stack>
                </Alert>
            </ModalDialog>
        </Modal>
    );
}

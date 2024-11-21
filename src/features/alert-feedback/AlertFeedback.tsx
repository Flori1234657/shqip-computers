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
import useWindowDimensions from 'src/hooks/useWindowsDimesions';
import useRenderStore from 'src/stores/render';

export default function AlertFeedback() {
    const { type, description } = useAlertStore();
    const { width } = useWindowDimensions();
    const closeAlertBox = useRenderStore(
        (state) => state.toggleIsAlertFeedbackVisible
    );

    return (
        <Modal open={true}>
            <ModalDialog
                sx={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderRadius: { xs: '0.75rem', md: '0.469rem' },
                    boxShadow: '0 3px 12px 3px rgba(0,0,0,0.25)',
                    padding: 0,
                    '--Card-padding': 0,
                    width: { xs: '17rem', md: '22.875rem' },
                }}
            >
                <Alert
                    sx={{
                        alignItems: 'flex-start',
                        borderRadius: { xs: '0.75rem', md: '0.469rem' },
                    }}
                    variant='soft'
                    color={type === 'Success' ? 'success' : 'danger'}
                    invertedColors
                    endDecorator={
                        <IconButton
                            variant='soft'
                            sx={{ borderRadius: '50%' }}
                            size={width < 900 ? 'md' : 'xs'}
                            onClick={() => closeAlertBox()}
                        >
                            <CloseIcpm />
                        </IconButton>
                    }
                >
                    <Stack gap={{ xs: '0.25rem', md: '0.118rem' }}>
                        <Typography
                            fontSize={{ xs: '1.2rem', md: '0.973rem' }}
                            fontWeight='700'
                            lineHeight={{ xs: '1.4', md: '1.2' }}
                        >
                            {type}!
                        </Typography>
                        <Typography
                            fontSize={{ xs: '0.831rem', md: '0.675rem' }}
                            lineHeight={{ md: '1.6' }}
                        >
                            {description}
                        </Typography>
                    </Stack>
                </Alert>
            </ModalDialog>
        </Modal>
    );
}

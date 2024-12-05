import { Modal, ModalDialog, Stack, Typography } from '@mui/joy';
import DiscountsMap from './components/DiscontsMap';
import Total from './components/Total';
import CloseButton from './components/CloseButton';

export default function DiscountModal() {
    return (
        <Modal open={true}>
            <ModalDialog
                sx={(theme) => ({
                    minWidth: { md: '12.891rem' },
                    p: { xs: '1.5rem', md: '0.703rem' },
                    gap: { xs: '1rem', md: '0.703rem' },
                    borderRadius: { xs: '0.75rem', md: '0.469rem' },
                    border: 'none',
                    bgcolor: theme.palette.primary[900],
                })}
            >
                <Typography
                    fontFamily='Poppins'
                    fontWeight='500'
                    lineHeight='1.2'
                    sx={{
                        fontSize: { xs: '1rem', md: '0.809rem' },
                        color: 'white',
                    }}
                >
                    Discount details
                </Typography>
                <Stack gap={{ xs: '0.5rem', dm: '0.469rem' }}>
                    <DiscountsMap />
                </Stack>
                <Total />
                <CloseButton />
            </ModalDialog>
        </Modal>
    );
}

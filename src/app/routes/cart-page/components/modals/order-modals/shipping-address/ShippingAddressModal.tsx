import { Modal, ModalDialog, Typography } from '@mui/joy';
import Form from './components/Form';

export default function ShippingAddressModal() {
    return (
        <Modal open={true}>
            <ModalDialog
                sx={(theme) => ({
                    minWidth: { md: '12.891rem' },
                    maxWidth: { md: '18.34rem' },
                    p: { xs: '1.5rem', md: '0.938rem' },
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
                    Shipping address
                </Typography>
                <Form />
            </ModalDialog>
        </Modal>
    );
}

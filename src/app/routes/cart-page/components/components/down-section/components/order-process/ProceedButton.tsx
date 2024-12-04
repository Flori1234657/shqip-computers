import { IoMdCard as CardIcon } from 'react-icons/io';
import { Button, Stack, Typography } from '@mui/joy';

export default function ProceedButton() {
    const hasShippingAddressAdded = true;

    return (
        <Stack width='100%' gap={{ xs: '0.5rem' }} alignItems='center'>
            <Button
                fullWidth
                disabled={!hasShippingAddressAdded}
                endDecorator={<CardIcon />}
            >
                Proceed to Payment
            </Button>
            {hasShippingAddressAdded ? (
                ''
            ) : (
                <Typography
                    lineHeight='1'
                    fontWeight='500'
                    sx={(theme) => ({
                        fontSize: { xs: '0.694rem' },
                        color: theme.palette.danger[500],
                    })}
                >
                    !First add your shipping address
                </Typography>
            )}
        </Stack>
    );
}

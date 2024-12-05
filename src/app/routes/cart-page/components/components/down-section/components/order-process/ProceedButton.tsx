import { IoMdCard as CardIcon } from 'react-icons/io';
import { Button, Stack, Typography } from '@mui/joy';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function ProceedButton() {
    const hasShippingAddressAdded = false;
    const { width } = useWindowDimensions();

    return (
        <Stack
            width='100%'
            gap={{ xs: '0.5rem', md: '0.352rem' }}
            alignItems='center'
        >
            <Button
                fullWidth
                size={width < 900 ? 'md' : 'md2'}
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
                        fontSize: { xs: '0.694rem', md: '0.563rem' },
                        color: theme.palette.danger[500],
                    })}
                >
                    !First add your shipping address
                </Typography>
            )}
        </Stack>
    );
}

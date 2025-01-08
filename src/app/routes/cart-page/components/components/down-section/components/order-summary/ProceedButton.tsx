import { IoMdCard as CardIcon } from 'react-icons/io';
import { Button, Stack, Typography } from '@mui/joy';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';
import useShippingAddressStore from 'src/app/routes/cart-page/store/shippingAddress';
import useMakeOrder from 'src/app/routes/cart-page/hooks/useMakeOrder';
import { useEffect } from 'react';

export default function ProceedButton() {
    const { shippingAddress } = useShippingAddressStore();
    const { width } = useWindowDimensions();

    const { makeOrder, isLoading } = useMakeOrder();
    const controller = new AbortController();

    useEffect(() => {
        return () => controller.abort();
    }, []);

    return (
        <Stack
            width='100%'
            gap={{ xs: '0.5rem', md: '0.352rem' }}
            alignItems='center'
        >
            <Button
                fullWidth
                size={width < 900 ? 'md' : 'md2'}
                disabled={!shippingAddress}
                endDecorator={<CardIcon />}
                loading={isLoading}
                onClick={() => {
                    makeOrder(controller.signal);
                }}
            >
                Proceed to Payment
            </Button>
            {shippingAddress ? (
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

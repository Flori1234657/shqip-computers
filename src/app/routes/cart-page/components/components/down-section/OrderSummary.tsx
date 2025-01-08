import { Stack, Typography } from '@mui/joy';
import Subtotal from './components/order-summary/Subtotal';
import ShippingFees from './components/order-summary/ShippingFees';
import Discount from './components/order-summary/Discount';
import Total from './components/order-summary/Total';
import ProceedButton from './components/order-summary/ProceedButton';
import Image from 'src/components/Image';
import BlobImage from 'src/assets/images/svg/cart-page/order-summary-blob.svg';
import useOrderSummary from '../../../hooks/useOrderSummary';
import { useEffect } from 'react';
import useShippingAddressStore from '../../../store/shippingAddress';
import useGetDeal from 'src/app/routes/home-page/hooks/useGetDeal';
import useDealStore from 'src/app/routes/home-page/store/deal';

export default function OrderSummary() {
    const { requestDeal } = useGetDeal();
    const { deal } = useDealStore();

    const { getAndSetOrderDetails } = useOrderSummary();
    const { shippingAddress } = useShippingAddressStore();

    useEffect(() => {
        const controller = new AbortController();

        requestDeal(controller.signal);
        getAndSetOrderDetails();

        return () => {
            controller.abort();
        };
    }, [shippingAddress, deal]);

    return (
        <Stack position='relative'>
            <Image
                ratio='1.16/1'
                alt='Blob'
                src={BlobImage}
                width={{ xs: '20rem', md: '20.479rem' }}
                objectFit='contain'
                otherStyles={{
                    position: 'absolute',
                    top: { xs: '-2.625rem', md: '-3rem' },
                    right: { xs: '-4.875rem', md: '-11.125rem' },
                    zIndex: -1,
                }}
            />
            <Stack
                sx={(theme) => ({
                    minWidth: { md: '12.891rem' },
                    p: { xs: '1.5rem', md: '0.703rem' },
                    gap: { xs: '1rem', md: '0.703rem' },
                    borderRadius: { xs: '0.75rem', md: '0.469rem' },
                    bgcolor: theme.palette.primary[900],
                    boxShadow: {
                        md: '0 0.059rem 0.319rem 0.176rem rgba(0,0,0,0.5)',
                    },
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
                    Order summary
                </Typography>
                <Stack gap={{ xs: '0.5rem', dm: '0.469rem' }}>
                    <Subtotal />
                    <ShippingFees />
                    <Discount />
                </Stack>
                <Total />
                <ProceedButton />
            </Stack>
        </Stack>
    );
}

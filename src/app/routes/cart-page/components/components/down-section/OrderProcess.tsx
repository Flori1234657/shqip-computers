import { Stack, Typography } from '@mui/joy';
import Subtotal from './components/order-process/Subtotal';
import ShippingFees from './components/order-process/ShippingFees';
import Discount from './components/order-process/Discount';
import Total from './components/order-process/Total';
import ProceedButton from './components/order-process/ProceedButton';
import Image from 'src/components/Image';
import BlobImage from 'src/assets/images/svg/cart-page/order-summary-blob.svg';

export default function OrderProcess() {
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

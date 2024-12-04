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
                width={{ xs: '20rem' }}
                objectFit='contain'
                otherStyles={{
                    position: 'absolute',
                    top: '-2.625rem',
                    right: '-4.875rem',
                    zIndex: -1,
                }}
            />
            <Stack
                sx={(theme) => ({
                    p: { xs: '1.5rem' },
                    gap: { xs: '1rem' },
                    borderRadius: { xs: '0.75rem' },
                    bgcolor: theme.palette.primary[900],
                })}
            >
                <Typography
                    fontFamily='Poppins'
                    fontWeight='500'
                    lineHeight='1.2'
                    sx={{ fontSize: { xs: '1rem' }, color: 'white' }}
                >
                    Order summary
                </Typography>
                <Stack gap={{ xs: '0.5rem' }}>
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

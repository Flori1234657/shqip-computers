import { Stack, Typography } from '@mui/joy';
import QuantityButtons from './components/QuantityButtons';
import DeleteButton from './components/DeleteButton';
import ProductDescription from './components/ProductDescription';
import { CartItem } from 'src/features/shopping-cart/types/store';

export default function ProductItem({ item, quantity }: CartItem) {
    return (
        <>
            <ProductDescription
                image={`${import.meta.env.VITE_REACT_APP_BACKEND}${item.images[0].url}`}
                title={item.name}
                price={item.defaultPrice}
            />
            <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                sx={{ flexGrow: { md: '1' } }}
            >
                <Stack
                    direction='row'
                    alignItems='center'
                    justifyContent={{ md: 'space-between' }}
                    width={{ md: '8.868rem' }}
                    gap={{ xs: '0.5rem', md: 'unset' }}
                >
                    <QuantityButtons
                        quantity={quantity}
                        cartItem={{ item, quantity }}
                    />
                    <Typography
                        fontWeight='600'
                        lineHeight='1.2'
                        sx={(theme) => ({
                            fontSize: { xs: '1rem', md: '0.674rem' },
                            color: theme.palette.primary[900],
                        })}
                    >
                        ${(quantity * item.defaultPrice).toFixed(2)}
                    </Typography>
                </Stack>
                <DeleteButton id={item.documentId} />
            </Stack>
        </>
    );
}

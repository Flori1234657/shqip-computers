import { IconButton, Stack, Typography } from '@mui/joy';
import { FaPlus as PlusIcon, FaMinus as MinusIcon } from 'react-icons/fa6';
import useCartStore from 'src/features/shopping-cart/stores/shoppingCart';
import { CartItem } from 'src/features/shopping-cart/types/store';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

interface Props {
    quantity: number;
    cartItem: CartItem;
}

export default function QuantityButtons({ quantity, cartItem }: Props) {
    const { width } = useWindowDimensions();
    const { decrementCartItems, setCartItems } = useCartStore();

    return (
        <Stack
            direction='row'
            alignItems='center'
            sx={{ width: { xs: '5rem', md: '3.656rem' } }}
            justifyContent='space-between'
        >
            <IconButton
                variant='solid'
                color='primary'
                size={width < 900 ? 'xs2' : 'xs4'}
                onClick={() => decrementCartItems(cartItem.item.documentId)}
            >
                <MinusIcon />
            </IconButton>
            <Typography
                fontWeight='600'
                lineHeight='1.2'
                sx={(theme) => ({
                    fontSize: { xs: '1rem', md: '0.674rem' },
                    color: theme.palette.primary[900],
                })}
            >
                {quantity}
            </Typography>
            <IconButton
                variant='solid'
                color='primary'
                size={width < 900 ? 'xs2' : 'xs4'}
                onClick={() => setCartItems(cartItem.item)}
            >
                <PlusIcon />
            </IconButton>
        </Stack>
    );
}

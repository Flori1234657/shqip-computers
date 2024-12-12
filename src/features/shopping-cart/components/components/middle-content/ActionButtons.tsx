import { IconButton, Stack, Typography } from '@mui/joy';
import { FaPlus as PlusIcon, FaMinus as MinusIcon } from 'react-icons/fa6';
import useCartStore from 'src/features/shopping-cart/stores/shoppingCart';
import { CartItem } from 'src/features/shopping-cart/types/store';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

function ActionButtons({
    quantity,
    cartItem,
}: {
    quantity: number;
    cartItem: CartItem;
}) {
    const { width } = useWindowDimensions();
    const { decrementCartItems, setCartItems } = useCartStore();

    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            width={{ xs: '5rem', md: '3.047rem' }}
        >
            <IconButton
                variant='solid'
                size={width < 900 ? 'xs2' : 'xs3'}
                sx={(theme) => ({ bgcolor: theme.palette.primary[900] })}
                onClick={() => decrementCartItems(cartItem.item.documentId)}
            >
                <MinusIcon />
            </IconButton>
            <Typography
                fontSize={{ xs: '1rem', md: '0.563rem' }}
                fontWeight='600'
                lineHeight='1.2'
            >
                {quantity}
            </Typography>
            <IconButton
                variant='solid'
                size={width < 900 ? 'xs2' : 'xs3'}
                sx={(theme) => ({ bgcolor: theme.palette.primary[900] })}
                onClick={() => setCartItems(cartItem.item)} // reduce the size by only passing the id
            >
                <PlusIcon />
            </IconButton>
        </Stack>
    );
}

export default ActionButtons;

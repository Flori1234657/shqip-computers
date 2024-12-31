import { IconButton, Stack, Typography } from '@mui/joy';
import { MdOutlineArrowForward as ArrowIcon } from 'react-icons/md';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';
import useRenderStore from 'src/stores/render';
import useCartStore from '../stores/shoppingCart';

function UpperContent() {
    const { width } = useWindowDimensions();
    const cartItems = useCartStore((state) => state.cartItems);
    const toggleShoppingCartVisibility = useRenderStore(
        (state) => state.toggleIsShoppingCartVisible
    );

    return (
        <Stack gap={{ xs: '1rem', md: '0.469rem' }}>
            <Stack
                gap={{ xs: '1rem', md: '0.469rem' }}
                direction='row'
                alignItems='center'
                sx={(theme) => ({
                    pb: { xs: '0.5rem', md: '0.234rem' },
                    borderBottom: `1px solid ${theme.palette.neutral[500]}`,
                })}
            >
                <IconButton
                    variant='solid'
                    size={width < 900 ? 'sm' : 'xs'}
                    sx={(theme) => ({ bgcolor: theme.palette.neutral[900] })}
                    onClick={() => toggleShoppingCartVisibility()}
                >
                    <ArrowIcon />
                </IconButton>
                <Typography
                    fontSize={{ xs: 'lg', md: '0.809rem' }}
                    fontWeight='600'
                    lineHeight='1.2'
                    sx={(theme) => ({ color: theme.palette.primary[900] })}
                >
                    Shopping cart
                </Typography>
            </Stack>
            <Typography
                alignSelf='flex-end'
                fontSize={{ xs: 'sm', md: '0.563rem' }}
                fontWeight='500'
                lineHeight='1.2'
                sx={(theme) => ({ color: theme.palette.text.tertiary })}
            >
                {cartItems ? cartItems.length : 0} products
            </Typography>
        </Stack>
    );
}

export default UpperContent;

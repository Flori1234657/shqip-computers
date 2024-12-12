import { List, ListItem, Stack, Typography } from '@mui/joy';
import ActionButtons from './components/middle-content/ActionButtons';
import ImageNamePriceInfo from './components/middle-content/ImageNamePriceInfo';
import useCartStore from '../stores/shoppingCart';

function MiddleContent() {
    const cartItems = useCartStore((state) => state.cartItems);

    return (
        <List
            sx={{
                gap: { xs: '0.5rem', md: '0.234rem' },
                maxHeight: { xs: '55vh' },
                overflowY: 'scroll',
            }}
        >
            {cartItems!.map((cartItem) => (
                <ListItem
                    key={`shopping-cart-item${cartItem.item.documentId}`}
                    sx={{ borderBottom: '1px solid rgba(85,94,104,0.5)' }}
                >
                    <Stack
                        width='100%'
                        sx={{ pb: { xs: '0.5rem', md: '0.234rem' } }}
                        gap={{ md: '0.234rem' }}
                    >
                        <ImageNamePriceInfo
                            image={`${import.meta.env.VITE_REACT_APP_BACKEND}${cartItem.item.images[0].url}`}
                            name={cartItem.item.name}
                            price={`${cartItem.item.defaultPrice}`}
                        />
                        <Stack
                            direction='row'
                            width='100%'
                            justifyContent='space-between'
                        >
                            <ActionButtons
                                quantity={cartItem.quantity}
                                cartItem={cartItem}
                            />
                            <Typography
                                level='title-sm'
                                fontSize={{ xs: '1rem', md: '0.563rem' }}
                                sx={(theme) => ({
                                    color: theme.palette.primary[500],
                                    fontWeight: '500',
                                })}
                            >
                                $
                                {(
                                    cartItem.quantity *
                                    Number(cartItem.item.defaultPrice)
                                ).toFixed(2)}
                            </Typography>
                        </Stack>
                    </Stack>
                </ListItem>
            ))}
        </List>
    );
}

export default MiddleContent;

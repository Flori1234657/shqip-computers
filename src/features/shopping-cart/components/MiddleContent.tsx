import { List, ListItem, Stack, Typography } from '@mui/joy';
import Placeholder from 'src/assets/images/placeholder.png';
import ActionButtons from './components/middle-content/ActionButtons';
import ImageNamePriceInfo from './components/middle-content/ImageNamePriceInfo';

function MiddleContent() {
    const cartItems = [
        {
            id: '1283n8dcc19028j0',
            name: 'Lenovo Thinkbook g13th',
            image: Placeholder,
            price: '320.00',
            quantity: 1,
        },
        {
            id: '387db8dbsa809jn2',
            name: '3v transistor',
            image: Placeholder,
            price: '0.25',
            quantity: 5,
        },
        {
            id: '.z/x.p2-cin901-jax1',
            name: '1tb HDD',
            image: Placeholder,
            price: '100.00',
            quantity: 1,
        },
    ];

    return (
        <List
            sx={{
                gap: { xs: '0.5rem', md: '0.234rem' },
                maxHeight: { xs: '55vh' },
                overflowY: 'scroll',
            }}
        >
            {cartItems.map((item) => (
                <ListItem
                    key={`shopping-cart-item${item.id}`}
                    sx={{ borderBottom: '1px solid rgba(85,94,104,0.5)' }}
                >
                    <Stack
                        width='100%'
                        sx={{ pb: { xs: '0.5rem', md: '0.234rem' } }}
                        gap={{ md: '0.234rem' }}
                    >
                        <ImageNamePriceInfo
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                        <Stack
                            direction='row'
                            width='100%'
                            justifyContent='space-between'
                        >
                            <ActionButtons quantity={item.quantity} />
                            <Typography
                                level='title-sm'
                                fontSize={{ xs: '1rem', md: '0.563rem' }}
                                sx={(theme) => ({
                                    color: theme.palette.primary[500],
                                    fontWeight: '500',
                                })}
                            >
                                $
                                {(item.quantity * Number(item.price)).toFixed(
                                    2
                                )}
                            </Typography>
                        </Stack>
                    </Stack>
                </ListItem>
            ))}
        </List>
    );
}

export default MiddleContent;

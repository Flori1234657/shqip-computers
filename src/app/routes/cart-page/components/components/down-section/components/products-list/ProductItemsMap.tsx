import { Stack } from '@mui/joy';
import Placeholder from 'src/assets/images/placeholder.png';
import ProductItem from './components/product-cards-map/ProductItem';

export default function ProductItemsMap() {
    const fakeData = [
        {
            id: '1283n8dcc19028j0',
            name: 'Fujitsu Esprimo p700',
            image: Placeholder,
            price: '123.00',
            quantity: 1,
        },
        {
            id: '387db8dbsa809jn2',
            name: 'Lenovo Thinkbook g13th',
            image: Placeholder,
            price: '320.00',
            quantity: 1,
        },
        {
            id: '.z/x.p2-cin901-jax1',
            name: 'Wired mouse M3',
            image: Placeholder,
            price: '25.00',
            quantity: 3,
        },
    ];

    return (
        <Stack
            gap={{ xs: '0.5rem', md: '0.234rem' }}
            sx={{
                maxHeight: { xs: '20.625rem', md: '13.43rem' },
                overflowY: 'scroll',
            }}
        >
            {fakeData.map((product) => (
                <Stack
                    key={`my-bag-product-item${product.id}`}
                    sx={(theme) => ({
                        flexDirection: { md: 'row' },
                        p: { xs: '0.5rem', md: '0.234rem' },
                        gap: { xs: '0.5rem', md: '2.461rem' },
                        bgcolor: 'white',
                        boxShadow: {
                            xs: theme.shadow.productItem,
                            md: '0 0.029rem 0.118rem 0 rgba(0,0,0,0.5)',
                        },
                        borderRadius: { xs: '0.75rem', md: '0.352rem' },
                        cursor: { md: 'pointer' },

                        ':hover': {
                            bgcolor: theme.palette.primary[200],
                        },
                    })}
                >
                    <ProductItem
                        image={product.image}
                        price={product.price}
                        quantity={product.quantity}
                        title={product.name}
                    />
                </Stack>
            ))}
        </Stack>
    );
}

import { Stack } from '@mui/joy';
import ProductItem from './components/product-cards-map/ProductItem';
import useCartStore from 'src/features/shopping-cart/stores/shoppingCart';

export default function ProductItemsMap() {
    const { cartItems } = useCartStore();

    return (
        <Stack
            gap={{ xs: '0.5rem', md: '0.234rem' }}
            sx={{
                maxHeight: { xs: '20.625rem', md: '13.43rem' },
                overflowY: 'scroll',
            }}
        >
            {cartItems!.map((product) => (
                <Stack
                    key={`my-bag-product-item${product.item.id}`}
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
                    <ProductItem {...product} />{' '}
                    {/** find a way to pass only the data that is needed */}
                </Stack>
            ))}
        </Stack>
    );
}

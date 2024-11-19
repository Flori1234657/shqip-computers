import { IconButton, Stack } from '@mui/joy';
import { lazy, Suspense } from 'react';
import { MdOutlineShoppingCart as CartIcon } from 'react-icons/md';
import useCartStore from 'src/features/shopping-cart/stores/shoppingCart';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

const CategoryButton = lazy(
    () => import('./components/buttons/CategoryButton')
);

export default function Buttons() {
    const { width } = useWindowDimensions();
    const toggleShoppingCartVisibility = useCartStore(
        (state) => state.toggleIsVisible
    );

    return (
        <Stack direction={{ md: 'row' }} gap={{ md: '0.938rem' }}>
            <IconButton
                variant='solid'
                size={width < 900 ? 'sm' : 'xs'}
                color='primary'
                sx={(theme) => ({ bgcolor: theme.palette.primary[900] })}
                onClick={() => toggleShoppingCartVisibility()}
            >
                <CartIcon />
            </IconButton>

            {width < 899 ? (
                ''
            ) : (
                <Suspense fallback=''>
                    <CategoryButton />
                </Suspense>
            )}
        </Stack>
    );
}

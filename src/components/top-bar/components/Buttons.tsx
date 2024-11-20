import { IconButton, Stack } from '@mui/joy';
import { lazy, Suspense } from 'react';
import { MdOutlineShoppingCart as CartIcon } from 'react-icons/md';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';
import useRenderStore from 'src/stores/render';

const CategoryButton = lazy(
    () => import('./components/buttons/CategoryButton')
);

export default function Buttons() {
    const { width } = useWindowDimensions();
    const toggleShoppingCartVisibility = useRenderStore(
        (state) => state.toggleIsShoppingCartVisible
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

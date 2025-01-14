import { IconButton, Stack } from '@mui/joy';
import { lazy, Suspense } from 'react';
import { MdOutlineShoppingCart as CartIcon } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

const CategoryButton = lazy(
    () => import('./components/buttons/CategoryButton')
);

export default function Buttons() {
    const { pathname } = useLocation();
    const { width } = useWindowDimensions();

    const handleToggleCart = async () => {
        const useRenderStore = await import('src/stores/render');
        useRenderStore.default.getState().toggleIsShoppingCartVisible();
    };

    return (
        <Stack direction={{ md: 'row' }} gap={{ md: '0.938rem' }}>
            <IconButton
                disabled={pathname === '/cart'}
                variant='solid'
                size={width < 900 ? 'sm' : 'xs'}
                color='primary'
                sx={(theme) => ({
                    bgcolor: theme.palette.primary[900],
                })}
                onClick={handleToggleCart}
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

import { Stack } from '@mui/joy';
import UpperContent from './components/UpperContent';
import { lazy, Suspense } from 'react';
import useRenderStore from 'src/stores/render';

const EmptyCartConfirmationModal = lazy(
    () => import('./components/EmptyCartConfirmationModal')
);
const MiddleContent = lazy(() => import('./components/MiddleContent'));
const Buttons = lazy(() => import('./components/Buttons'));
const NoItemImage = lazy(() => import('./components/NoItemImage'));

export default function ShoppingCart() {
    const isCartVisible = useRenderStore(
        (state) => state.isShoppingCartVisible
    );
    if (!isCartVisible) return;

    // Supposing we have the zustand store
    const areProductsThere = true;

    return (
        <Stack
            position='fixed'
            sx={(theme) => ({
                top: 0,
                right: 0,
                zIndex: 2,

                width: { xs: '100vw', sm: '60vw', md: 'fit-content' },
                minHeight: { xs: '100vh' },
                p: { xs: '1.5rem', md: '0.703rem' },
                gap: { xs: '1rem', md: '0.469rem' },

                bgcolor: theme.palette.primary[100],
            })}
        >
            <UpperContent />
            <Suspense fallback='Loading'>
                {areProductsThere ? (
                    <>
                        <EmptyCartConfirmationModal />
                        <MiddleContent />
                        <Buttons />
                    </>
                ) : (
                    <NoItemImage />
                )}
            </Suspense>
        </Stack>
    );
}

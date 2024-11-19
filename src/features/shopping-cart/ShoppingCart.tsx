import { Stack } from '@mui/joy';
import UpperContent from './components/UpperContent';
import { lazy, Suspense } from 'react';
import useCartStore from './stores/shoppingCart';

const EmptyCartConfirmationModal = lazy(
    () => import('./components/EmptyCartConfirmationModal')
);
const MiddleContent = lazy(() => import('./components/MiddleContent'));
const Buttons = lazy(() => import('./components/Buttons'));
const NoItemImage = lazy(() => import('./components/NoItemImage'));

export default function ShoppingCart() {
    const isCartVisible = useCartStore((state) => state.isVisible);
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

                width: { xs: '100vw' },
                minHeight: { xs: '100vh' },
                p: { xs: '1.5rem' },
                gap: { xs: '1rem' },

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

import { Stack } from '@mui/joy';
import UpperContent from './components/UpperContent';
import { lazy, Suspense } from 'react';
import useCartStore from './stores/shoppingCart';
import { motion } from 'motion/react';

const EmptyCartConfirmationModal = lazy(
    () => import('./components/EmptyCartConfirmationModal')
);
const MiddleContent = lazy(() => import('./components/MiddleContent'));
const Buttons = lazy(() => import('./components/Buttons'));
const NoItemImage = lazy(() => import('./components/NoItemImage'));

export default function ShoppingCart() {
    const cartItems = useCartStore((state) => state.cartItems);

    return (
        <Stack
            position='fixed'
            sx={(theme) => ({
                top: 0,
                right: 0,
                zIndex: 20,

                width: { xs: '100vw', sm: '60vw', md: 'fit-content' },
                minHeight: { xs: '100vh' },
                p: { xs: '1.5rem', md: '0.703rem' },
                gap: { xs: '1rem', md: '0.469rem' },

                bgcolor: theme.palette.primary[100],
            })}
            component={motion.div}
            initial={{ translateX: '100%' }}
            animate={{ translateX: 0, transition: { duration: 0.5 } }}
            exit={{ translateX: '100%', transition: { duration: 0.5 } }}
        >
            <UpperContent />
            <Suspense fallback='Loading'>
                {cartItems && cartItems.length > 0 ? (
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

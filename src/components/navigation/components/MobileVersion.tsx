import { Stack } from '@mui/joy';
import { motion } from 'motion/react';
import { lazy, Suspense } from 'react';

const CategoryButton = lazy(
    () => import('./components/mobile-navigation/CategoryButton')
);
const NavLinks = lazy(() => import('./components/mobile-navigation/NavLinks'));

export default function MobileVersion() {
    return (
        <Stack
            sx={{
                width: '18.75rem',
                position: 'absolute',
                top: '80vh',
                left: 0,
                right: 0,
                ml: 'auto',
                mr: 'auto',
            }}
        >
            <nav>
                <Stack
                    direction='row'
                    px='0.75rem'
                    py='0.5rem'
                    justifyContent='space-between'
                    sx={(theme) => ({
                        justifyContent: 'space-between',
                        bgcolor: theme.palette.primary[900],
                        borderRadius: '1.5rem',

                        maxHeight: '4.063rem',
                    })}
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                >
                    <Suspense fallback=''>
                        <CategoryButton />
                        <NavLinks />
                    </Suspense>
                </Stack>
            </nav>
        </Stack>
    );
}

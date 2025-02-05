import { Stack } from '@mui/joy';
import Logo from './components/Logo';
import { motion } from 'motion/react';
import { lazy, Suspense } from 'react';

const Buttons = lazy(() => import('./components/Buttons'));
const Navigation = lazy(() => import('../navigation/Navigation'));

export default function TopBar() {
    return (
        <header
            style={{ width: '100%', position: 'fixed', top: 0, zIndex: 10 }}
        >
            <Stack
                alignItems={{ md: 'center' }}
                direction={'row'}
                justifyContent='space-between'
                sx={{
                    px: { xs: '1.5rem', sm: '2.5rem', md: '2.344rem' },
                    py: { xs: '0.5rem', sm: '0.563rem', md: '0.234rem' },
                }}
                bgcolor='white'
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.75 } }}
            >
                <Logo />
                <Suspense fallback=''>
                    <Navigation />
                    <Buttons />
                </Suspense>
            </Stack>
        </header>
    );
}

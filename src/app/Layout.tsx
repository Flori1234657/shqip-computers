import { Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const DynamicImports = lazy(() => import('./DynamicImports'));
const TopBar = lazy(() => import('src/components/top-bar/TopBar'));
const Footer = lazy(() => import('src/components/footer/Footer'));

export default function Layout() {
    return (
        <>
            <Suspense fallback=''>
                <DynamicImports />
                <TopBar />
            </Suspense>
            <main style={{ overflowX: 'hidden' }} className='hide-scrollbars'>
                <Outlet />
            </main>
            <Suspense fallback=''>
                <Footer />
            </Suspense>
        </>
    );
}

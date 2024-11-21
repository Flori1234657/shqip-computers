import { Outlet } from 'react-router-dom';
import TopBar from 'src/components/top-bar/TopBar';
import Footer from 'src/components/footer/Footer';
import { lazy, Suspense } from 'react';

const DynamicImports = lazy(() => import('./DynamicImports'));

export default function Layout() {
    return (
        <>
            <Suspense fallback=''>
                <DynamicImports />
            </Suspense>
            <TopBar />
            <main style={{ overflowX: 'hidden' }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

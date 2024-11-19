import { Outlet } from 'react-router-dom';
import TopBar from 'src/components/top-bar/TopBar';
import Footer from 'src/components/footer/Footer';
import { lazy, Suspense } from 'react';

const ShoppingCart = lazy(
    () => import('src/features/shopping-cart/ShoppingCart')
);

export default function Layout() {
    return (
        <>
            <Suspense fallback=''>
                <ShoppingCart />
            </Suspense>
            <TopBar />
            <main style={{ overflowX: 'hidden' }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

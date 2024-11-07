import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './routes/home-page/Home';
import { lazy, Suspense } from 'react';

const Shop = lazy(() => import('./routes/shop-page/Shop'));
const Cart = lazy(() => import('./routes/cart-page/Cart'));
const Product = lazy(() => import('./routes/product-page/Product'));
const AboutUs = lazy(() => import('./routes/AboutUs'));
const ContactUs = lazy(() => import('./routes/contact-page/ContactUs'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/shop',
                element: (
                    <Suspense fallback="fallback-component">
                        <Shop />
                    </Suspense>
                ),
                children: [
                    {
                        path: '/cart',
                        element: (
                            <Suspense fallback="fallback-component">
                                <Cart />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/product/:id',
                        element: (
                            <Suspense fallback="fallback-component">
                                <Product />
                            </Suspense>
                        ),
                    },
                ],
            },
            {
                path: '/about-us',
                element: (
                    <Suspense fallback="fallback-component">
                        <AboutUs />
                    </Suspense>
                ),
            },
            {
                path: '/contact-us',
                element: (
                    <Suspense fallback="fallback-component">
                        <ContactUs />
                    </Suspense>
                ),
            },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './routes/home-page/Home';
import { lazy, Suspense } from 'react';

const Category = lazy(() => import('./routes/category/components/Category'));
const Categories = lazy(() => import('./routes/category/Categories'));
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
                path: '/categories',
                element: (
                    <Suspense fallback=''>
                        <Categories />
                    </Suspense>
                ),
                children: [
                    {
                        path: '/categories/:categoryId',
                        element: (
                            <Suspense fallback=''>
                                <Category />
                            </Suspense>
                        ),
                    },
                ],
            },
            {
                path: '/shop',
                element: (
                    <Suspense fallback='fallback-component'>
                        <Shop />
                    </Suspense>
                ),
                children: [
                    {
                        path: '/shop/categories/:categoryId',
                        element: <Shop />,
                        children: [
                            {
                                path: '/shop/categories/:categoryId/:typeId',
                                element: <Shop />,
                            },
                        ],
                    },
                ],
            },
            {
                path: '/cart',
                element: (
                    <Suspense fallback='fallback-component'>
                        <Cart />
                    </Suspense>
                ),
            },
            {
                path: '/product/:id',
                element: (
                    <Suspense fallback='fallback-component'>
                        <Product />
                    </Suspense>
                ),
            },
            {
                path: '/about-us',
                element: (
                    <Suspense fallback='fallback-component'>
                        <AboutUs />
                    </Suspense>
                ),
            },
            {
                path: '/contact-us',
                element: (
                    <Suspense fallback='fallback-component'>
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

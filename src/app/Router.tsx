import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./routes/home-page/Home'));
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
                element: (
                    <Suspense fallback=''>
                        <Home />
                    </Suspense>
                ),
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
                    <Suspense fallback=''>
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
                    <Suspense fallback=''>
                        <Cart />
                    </Suspense>
                ),
            },
            {
                path: '/product/:id',
                element: (
                    <Suspense fallback=''>
                        <Product />
                    </Suspense>
                ),
            },
            {
                path: '/about-us',
                element: (
                    <Suspense fallback=''>
                        <AboutUs />
                    </Suspense>
                ),
            },
            {
                path: '/contact-us',
                element: (
                    <Suspense fallback=''>
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

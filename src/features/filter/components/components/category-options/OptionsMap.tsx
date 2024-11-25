import { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';

const ComputerOptions = lazy(
    () => import('./components/options-map/FilterComputerOptions')
);
const HardwareOptions = lazy(
    () => import('./components/options-map/FilterHardwareOptions')
);
const AccessoriesOptions = lazy(
    () => import('./components/options-map/FilterAccessoryOptions')
);

export default function OptionsMap() {
    const { pathname } = useLocation();

    if (
        pathname === '/shop/categories/pc' ||
        pathname === '/shop/categories/laptop'
    )
        return (
            <Suspense fallback=''>
                <ComputerOptions />
            </Suspense>
        );

    if (/shop\Wcategories\Waccessories\W\w+/.test(pathname))
        return (
            <Suspense fallback=''>
                <AccessoriesOptions />
            </Suspense>
        );

    if (/shop\Wcategories\Whardware\W\w+/.test(pathname))
        return (
            <Suspense fallback=''>
                <HardwareOptions />
            </Suspense>
        );

    return <></>;
}

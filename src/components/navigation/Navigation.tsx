import { lazy, Suspense } from 'react';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

const MobileVersion = lazy(() => import('./components/MobileVersion'));
const PcVersion = lazy(() => import('./components/PcNavigation'));

export default function Navigation() {
    const { width } = useWindowDimensions();

    return (
        <Suspense fallback='fallback animation 🌀'>
            {width < 900 ? <MobileVersion /> : <PcVersion />}
        </Suspense>
    );
}

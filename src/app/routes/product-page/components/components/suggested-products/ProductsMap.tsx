import { lazy } from 'react';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

const Sm = lazy(() => import('./components/products-map/Sm'));
const Tablet = lazy(() => import('./components/products-map/Tablet'));

export default function ProductsMap() {
    const { width } = useWindowDimensions();

    return <>{width < 600 ? <Sm /> : <Tablet />}</>;
}

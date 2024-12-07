import { lazy } from 'react';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

const Sm = lazy(() => import('./components/products-map/Sm'));
const Pc = lazy(() => import('./components/products-map/Pc'));

export default function ProductsMap() {
    const { width } = useWindowDimensions();

    return <>{width < 900 ? <Sm /> : <Pc />}</>;
}

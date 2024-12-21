import { Stack } from '@mui/joy';
import UpperSection from './components/UpperSection';
import DownSection from './components/DownSection';
import useFetchProducts from './hooks/useFetchProducts';
import { useEffect, useRef } from 'react';
import useShopStore from './store/shop';

export default function Shop() {
    const { getAndSetProducts } = useFetchProducts();
    const currentPage = useShopStore((state) => state.currentPage);
    const previousPage = useRef(currentPage);

    useEffect(() => {
        if (previousPage.current > currentPage) return;
        previousPage.current = currentPage;

        const controller = new AbortController();

        getAndSetProducts(controller.signal, currentPage);

        return () => controller.abort();
    }, [getAndSetProducts, currentPage]);

    return (
        <Stack
            mt={{ xs: '4.25rem', md: '4.688rem' }}
            mb={{ xs: '1.5rem', md: '0.25rem' }}
            gap={{ xs: '1.5rem', md: '2.375rem' }}
        >
            <UpperSection />
            <DownSection />
        </Stack>
    );
}

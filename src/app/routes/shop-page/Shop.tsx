import { Stack } from '@mui/joy';
import UpperSection from './components/UpperSection';
import DownSection from './components/DownSection';
import useFetchProducts from './hooks/useFetchProducts';
import { useEffect, useRef } from 'react';
import useShopStore from './store/shop';
import { useLocation } from 'react-router-dom';

export default function Shop() {
    const { getAndSetProducts } = useFetchProducts();
    const { currentPage, setCurrentPage, searchValue } = useShopStore();
    const previousPage = useRef(currentPage);

    const isResetingPage = useRef(false);
    const { pathname } = useLocation();

    useEffect(() => {
        // This is the page reset function
        if (isResetingPage.current) isResetingPage.current = false;

        if (previousPage.current > 1) previousPage.current = 1;
        if (currentPage === 1) return;

        isResetingPage.current = true;
        setCurrentPage(1);
    }, [pathname, searchValue, isResetingPage.current]);

    useEffect(() => {
        if (previousPage.current > currentPage || isResetingPage.current)
            return;

        previousPage.current = currentPage;

        const controller = new AbortController();

        getAndSetProducts(controller.signal, currentPage);

        return () => controller.abort();
    }, [currentPage, pathname, searchValue]);

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

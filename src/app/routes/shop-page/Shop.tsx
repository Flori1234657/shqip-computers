import { Stack } from '@mui/joy';
import UpperSection from './components/UpperSection';
import DownSection from './components/DownSection';
import useFetchProducts from './hooks/useFetchProducts';
import { useEffect, useRef } from 'react';
import useShopStore from './store/shop';
import { useParams } from 'react-router-dom';

export default function Shop() {
    const { getAndSetProducts } = useFetchProducts();
    const { currentPage, setCurrentPage } = useShopStore();
    const previousPage = useRef(currentPage);

    const isResetingPage = useRef(false);
    const queryParams = useParams();

    useEffect(() => {
        // This is the page reset function

        if (isResetingPage.current) isResetingPage.current = false;
        if (currentPage === 1 || !queryParams.categoryId) return;

        isResetingPage.current = true;
        setCurrentPage(1);
        previousPage.current = 1;
    }, [queryParams, isResetingPage.current]);

    useEffect(() => {
        if (previousPage.current > currentPage || isResetingPage.current)
            return;

        previousPage.current = currentPage;

        const controller = new AbortController();

        getAndSetProducts(controller.signal, currentPage);

        return () => controller.abort();
    }, [currentPage]);

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

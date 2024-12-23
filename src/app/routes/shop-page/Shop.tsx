import { Stack } from '@mui/joy';
import UpperSection from './components/UpperSection';
import DownSection from './components/DownSection';
import useFetchProducts from './hooks/useFetchProducts';
import { useEffect, useRef } from 'react';
import useShopStore from './store/shop';

export default function Shop() {
    const { getAndSetProducts } = useFetchProducts();
    const { currentPage } = useShopStore();
    const previousPage = useRef(currentPage);

    /**
     *  Find a way to solve category fetcjhing
     *  and pagination not giving problems
     */
    // const queryParams = useParams();
    // const isResettingPage = useRef(false);

    // useEffect(() => {
    //     if (!queryParams.categoryId) return;
    //     console.log('rerendered useEffect0');
    //     isResettingPage.current = true;
    //     setCurrentPage(1);
    //     previousPage.current.categories = 1;

    //     const controller = new AbortController();
    //     getAndSetProducts(controller.signal, 1).finally(() => {
    //         isResettingPage.current = false;
    //     });

    //     return () => controller.abort();
    // }, [queryParams.categoryId]);

    useEffect(() => {
        // if (isResettingPage.current) return;
        if (previousPage.current > currentPage) return;
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

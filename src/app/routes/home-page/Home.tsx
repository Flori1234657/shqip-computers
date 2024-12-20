import { lazy, Suspense, useEffect } from 'react';
import { Stack } from '@mui/joy';
import BrandsSection from './components/BrandsSection';
import BuildPcSection from './components/BuildPcSection';
import HeroSection from './components/HeroSection';
import MakeProfitSection from './components/MakeProfitSection';
import TestimonialsSection from './components/TestimonialsSection';

import useGetDeal from './hooks/useGetDeal';

const DealsSection = lazy(() => import('./components/DealsSection'));

export default function Home() {
    const { requestDeal, requestDealProducts } = useGetDeal();

    useEffect(() => {
        const controller = new AbortController();

        requestDeal(controller.signal);
        requestDealProducts(controller.signal);

        return () => controller.abort();
    }, []);

    return (
        <Stack alignItems='center'>
            <HeroSection />
            <Suspense>
                <DealsSection />
            </Suspense>
            <BuildPcSection />
            <MakeProfitSection />
            <BrandsSection />
            <TestimonialsSection />
        </Stack>
    );
}

import { lazy, Suspense } from 'react';
import { Stack } from '@mui/joy';

const HeroSection = lazy(() => import('./components/HeroSection'));
const DealsSection = lazy(() => import('./components/DealsSection'));
const BrandsSection = lazy(() => import('./components/BrandsSection'));
const BuildPcSection = lazy(() => import('./components/BuildPcSection'));
const MakeProfitSection = lazy(() => import('./components/MakeProfitSection'));
const TestimonialsSection = lazy(
    () => import('./components/TestimonialsSection')
);

export default function Home() {
    return (
        <Stack alignItems='center'>
            <Suspense fallback=''>
                <HeroSection />
                <DealsSection />
                <BuildPcSection />
                <MakeProfitSection />
                <BrandsSection />
                <TestimonialsSection />
            </Suspense>
        </Stack>
    );
}

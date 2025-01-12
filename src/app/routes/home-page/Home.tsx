import { lazy, Suspense } from 'react';
import { Stack } from '@mui/joy';
import BrandsSection from './components/BrandsSection';
import BuildPcSection from './components/BuildPcSection';
import HeroSection from './components/HeroSection';
import MakeProfitSection from './components/MakeProfitSection';
import TestimonialsSection from './components/TestimonialsSection';

const DealsSection = lazy(() => import('./components/DealsSection'));

export default function Home() {
    return (
        <Stack alignItems='center'>
            <HeroSection />
            <Suspense fallback=''>
                <DealsSection />
            </Suspense>
            <BuildPcSection />
            <MakeProfitSection />
            <BrandsSection />
            <TestimonialsSection />
        </Stack>
    );
}

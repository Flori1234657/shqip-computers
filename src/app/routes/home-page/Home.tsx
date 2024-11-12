import BrandsSection from './components/BrandsSection';
import BuildPcSection from './components/BuildPcSection';
import DealsSection from './components/DealsSection';
import HeroSection from './components/HeroSection';
import MakeProfitSection from './components/MakeProfitSection';
import TestimonialsSection from './components/TestimonialsSection';

export default function Home() {
    return (
        <>
            <HeroSection />
            <DealsSection />
            <BuildPcSection />
            <MakeProfitSection />
            <BrandsSection />
            <TestimonialsSection />
        </>
    );
}

import { Stack } from '@mui/joy';
import RightBlob from 'src/assets/images/svg/home/hero-blob-1.svg';
import LeftBlob from 'src/assets/images/svg/home/hero-blob-2.svg';
import { heroBlobVariants } from 'src/animations/home-page/hero-variants';
import { lazy, Suspense } from 'react';

const HeroTexts = lazy(() => import('./components/hero-section/HeroTexts'));
const Image = lazy(() => import('src/components/Image'));
const SearchBar = lazy(() => import('src/features/search-bar/SearchBar'));

export default function HeroSection() {
    return (
        <Stack
            mt={{ xs: '7.5rem', md: '5.876rem' }}
            gap={{ xs: '2rem', md: '2.578rem' }}
            maxWidth={{ md: '25.43rem' }}
        >
            <Suspense fallback=''>
                <Image
                    ratio='1.01/1'
                    src={RightBlob}
                    width='5.563rem'
                    alt='blob'
                    otherStyles={{
                        position: 'absolute',
                        top: { xs: '3rem', sm: '3.125rem', md: '12.344rem' },
                        left: { xs: 0, sm: '2.083rem', md: '4.313rem' },
                        zIndex: '-1',
                    }}
                    animate={{
                        variants: heroBlobVariants,
                        initial: 'initialLeft',
                        animate: 'animateLeft',
                    }}
                />
                <HeroTexts />
                <SearchBar />
                <Image
                    ratio='1.11/1'
                    src={LeftBlob}
                    width='5.875rem'
                    alt='blob'
                    otherStyles={{
                        position: 'absolute',
                        top: { xs: '21.5rem', sm: '17.5rem', md: '5.469rem' },
                        right: {
                            xs: '0.313rem',
                            sm: '0.417rem',
                            md: '6.688rem',
                        },
                        zIndex: '-1',
                    }}
                    animate={{
                        variants: heroBlobVariants,
                        initial: 'initialRight',
                        animate: 'animateRight',
                    }}
                />
            </Suspense>
        </Stack>
    );
}

import { Stack } from '@mui/joy';
import RightContent from './components/down-section/RightContent';
import useFilterStore from 'src/features/filter/stores/filter';
import { lazy, Suspense } from 'react';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';
import { AnimatePresence } from 'motion/react';

const Filter = lazy(() => import('src/features/filter/Filter'));

export default function DownSection() {
    const showFilter = useFilterStore((state) => state.isFilterVisible);
    const { width } = useWindowDimensions();

    return (
        <Stack
            position='relative'
            direction={{ md: 'row' }}
            justifyContent={{ md: 'space-between' }}
            gap={{ md: '0.615rem' }}
        >
            <AnimatePresence>
                {showFilter ? (
                    <Suspense fallback=''>
                        <Filter />
                    </Suspense>
                ) : width > 899 ? (
                    <Filter />
                ) : (
                    ''
                )}
            </AnimatePresence>
            <RightContent />
        </Stack>
    );
}

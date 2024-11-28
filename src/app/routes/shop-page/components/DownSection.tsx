import { Stack } from '@mui/joy';
import RightContent from './components/down-section/RightContent';
import useFilterStore from 'src/features/filter/stores/filter';
import { lazy, Suspense } from 'react';

const Filter = lazy(() => import('src/features/filter/Filter'));

export default function DownSection() {
    const showFilter = useFilterStore((state) => state.isFilterVisible);

    return (
        <Stack position='relative'>
            {showFilter ? (
                <Suspense fallback=''>
                    <Filter />
                </Suspense>
            ) : (
                ''
            )}
            <RightContent />
        </Stack>
    );
}

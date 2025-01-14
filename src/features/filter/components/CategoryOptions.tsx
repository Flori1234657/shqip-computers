/* eslint-disable @stylistic/js/indent */
import { Stack } from '@mui/joy';
import PriceFilter from './components/category-options/PriceFilter';
import NewUsedFilter from './components/category-options/NewUsedFilter';
import { useParams } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const OptionsMap = lazy(
    () => import('./components/category-options/OptionsMap')
);

export default function CategoryOptions() {
    const queryParams = useParams();

    return (
        <Stack gap={{ xs: '1.5rem', md: '0.703rem' }}>
            <PriceFilter />
            <NewUsedFilter />
            {queryParams.categoryId ? (
                queryParams.categoryId !== 'pc' &&
                queryParams.categoryId !== 'laptop' &&
                !queryParams.typeId ? (
                    ''
                ) : (
                    <Suspense fallback=''>
                        <OptionsMap />
                    </Suspense>
                )
            ) : (
                ''
            )}
        </Stack>
    );
}

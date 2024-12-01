import { Grid, Stack } from '@mui/joy';
import { useMemo, useState } from 'react';
import Pagination from 'src/components/Pagination';
import ProductCard from 'src/features/product-card/ProductCard';

import mockedProductData from 'src/mocks/productsData';
const pageSize = 10;

export default function ProductCardsMap() {
    const [currentPage, setCurrentPage] = useState(1);

    const currentProductsData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return mockedProductData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <Stack gap={{ xs: '2.5rem', md: '1.641rem' }}>
            <Grid
                container
                rowGap={{ xs: '1.5rem', md: '0.615rem' }}
                columnGap={{ sm: '1.5rem', md: 'unset' }}
                sx={{ justifyContent: { xs: 'center', md: 'space-between' } }}
            >
                {currentProductsData.map((product) => (
                    <Grid key={product.id} sx={{ width: 'fit-content' }}>
                        <ProductCard />
                    </Grid>
                ))}
            </Grid>
            <Stack
                direction='row'
                justifyContent={{ xs: 'space-between', md: 'center' }}
                gap={{ md: '0.469rem' }}
            >
                <Pagination
                    currentPage={currentPage}
                    onPageChange={(page) => setCurrentPage(page)}
                    pageSize={pageSize}
                    totalCount={mockedProductData.length}
                />
            </Stack>
        </Stack>
    );
}

import { Grid, Stack } from '@mui/joy';
import { useMemo, useState } from 'react';
import Pagination from 'src/components/Pagination';
import ProductCard from 'src/features/product-card/ProductCard';
import useProductStore from 'src/stores/products';

const pageSize = 10;

export default function Products() {
    const productsData = useProductStore((state) => state.products);
    const [currentPage, setCurrentPage] = useState(1);

    const currentProductsData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return productsData!.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <>
            <Grid
                container
                rowGap={{ xs: '1.5rem', md: '0.615rem' }}
                columnGap={{ sm: '1.5rem', md: 'unset' }}
                sx={{ justifyContent: { xs: 'center', md: 'space-between' } }}
            >
                {currentProductsData.map((product) => (
                    <Grid key={product.id} sx={{ width: 'fit-content' }}>
                        <ProductCard data={product} />
                    </Grid>
                ))}
                {/* <Loader fontSize='0.5rem' /> */}
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
                    totalCount={productsData!.length}
                />
            </Stack>
        </>
    );
}

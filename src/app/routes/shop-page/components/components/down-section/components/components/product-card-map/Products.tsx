import { Grid, Stack } from '@mui/joy';
import { motion } from 'motion/react';
import { useMemo } from 'react';
import useShopStore from 'src/app/routes/shop-page/store/shop';
import Pagination from 'src/components/Pagination';
import ProductCard from 'src/features/product-card/ProductCard';
import useProductStore from 'src/stores/products';

const pageSize = 10;

export default function Products() {
    const productsData = useProductStore((state) => state.products);
    const { totalProductsCount, setCurrentPage, currentPage } = useShopStore();

    const currentProductsData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return productsData!.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, productsData]);

    return (
        <>
            <Grid
                container
                rowGap={{ xs: '1.5rem', md: '0.615rem' }}
                columnGap={{ sm: '1.5rem', md: 'unset' }}
                sx={{ justifyContent: { xs: 'center', md: 'space-between' } }}
            >
                {currentProductsData.map((product) => (
                    <Grid
                        key={product.id}
                        sx={{ width: 'fit-content' }}
                        component={motion.div}
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: { duration: 0.5 },
                        }}
                    >
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
                    totalCount={
                        totalProductsCount
                            ? totalProductsCount
                            : productsData!.length
                    }
                />
            </Stack>
        </>
    );
}

import { Box, Stack } from '@mui/joy';
import ProductCard from 'src/features/product-card/ProductCard';
import AvailableTimeCards from './components/upper-content/AvailableTimeCards';
import HeadingText from './components/upper-content/HeadingText';
import React from 'react';
import useSelectProductStore from '../../../store/select';
import useDealStore from '../../../store/deal';

const UpperContent = React.memo(function UpperContent() {
    const selectedProduct = useSelectProductStore(
        (state) => state.selectedProduct
    );
    const dealProducts = useDealStore((state) => state.dealProducts?.data);

    const findSelectedProduct = () => {
        if (dealProducts && selectedProduct) {
            const productFinded = dealProducts.filter(
                (product) => product.documentId === selectedProduct
            );
            return productFinded[0];
        }
        if (dealProducts && !selectedProduct) return dealProducts[0];

        return undefined;
    };

    return (
        <Box
            sx={{
                width: 'fit-content',
                display: 'grid',
                gridTemplateColumns: 'repeat(12, auto)',
                gridTemplateRows: { md: '7.64rem auto' },
                rowGap: { md: '0.469rem' },
                columnGap: { md: '0.703rem' },
            }}
        >
            <Box
                sx={{
                    gridColumn: { xs: 'span 12', md: '7/13' },
                    pb: { xs: '0.5rem', md: 0 },
                }}
            >
                <HeadingText />
            </Box>
            <Box
                sx={{
                    gridColumn: { xs: 'span 8', md: '1/7' },
                    gridRow: { md: '1/3' },
                }}
            >
                <Stack>
                    <ProductCard data={findSelectedProduct()} />
                </Stack>
            </Box>
            <Box
                sx={{
                    gridColumn: { xs: 'span 4', md: '7/13' },
                    ml: { xs: '1.5rem', md: 0 },
                }}
            >
                <AvailableTimeCards />
            </Box>
        </Box>
    );
});

export default UpperContent;

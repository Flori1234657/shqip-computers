import { Stack } from '@mui/joy';
import Carousel from 'src/components/carousel/Carousel';
import Image from 'src/components/Image';
import { motion } from 'motion/react';
import { cardsCarouselVariants } from 'src/animations/shared';
import useProductStore from 'src/stores/products';
import { getRandomProducts } from 'src/app/routes/product-page/utils/suggested-products';
import { useNavigate } from 'react-router-dom';

export default function Sm() {
    const { products } = useProductStore();
    const navigate = useNavigate();

    return (
        <Stack
            width='100%'
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            sx={{ pb: '0.5rem' }}
            component={motion.div}
            variants={cardsCarouselVariants}
            initial='initial'
            whileInView='whileInView'
        >
            <Carousel
                elements={getRandomProducts(products!).map((product) => (
                    <Stack
                        key={`card-image-product${product.id}`}
                        sx={{
                            borderRadius: { xs: '0.5rem' },
                        }}
                        onClick={() =>
                            navigate(`/product/${product.documentId}`)
                        }
                    >
                        <Image
                            ratio='1.54/1'
                            src={`${import.meta.env.VITE_REACT_APP_BACKEND}${product.images[0].url}`}
                            width={{ xs: '10rem' }}
                            alt='product'
                        />
                    </Stack>
                ))}
                secondStackStyles={(theme) => ({
                    maxWidth: { xs: '10rem', sm: '20rem' },
                    height: { xs: '6.503rem' },
                    gap: { xs: '1.5rem' },
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    pl: { sm: '13rem' },
                    borderRadius: { xs: '0.5rem' },
                    boxShadow: theme.shadow.productPageSuggested,
                    overflow: 'hidden',
                })}
            />
        </Stack>
    );
}

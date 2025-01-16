import { Grid } from '@mui/joy';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { getRandomProducts } from 'src/app/routes/product-page/utils/suggested-products';
import Image from 'src/components/Image';
import useProductStore from 'src/stores/products';

export default function Tablet() {
    const { products } = useProductStore();
    const navigate = useNavigate();

    return (
        <Grid
            container
            gap={{ sm: '0.75rem', md: '0.703rem' }}
            sx={{
                justifyContent: 'center',
                pb: { sm: '0.5rem', md: 0 },
                maxWidth: { md: '12.422rem' },
            }}
        >
            {getRandomProducts(products!).map((product, index) => (
                <Grid
                    key={product.id}
                    sx={(theme) => ({
                        position: { md: 'relative' },
                        borderRadius: { sm: '0.5rem', md: '0.352rem' },
                        boxShadow: theme.shadow.productPageSuggested,
                        bgcolor: 'white',

                        ':hover': {
                            ':before': {
                                display: { xs: 'none', md: 'flex' },
                                content: `"${product.name}"`,
                                width: '100%',
                                height: '100%',
                                borderRadius: '0.352rem',
                                padding: '0.469rem 0.352rem',
                                alignItems: 'flex-end',
                                position: 'absolute',
                                bottom: 0,
                                zIndex: 1,
                                background:
                                    'linear-gradient(180deg, rgba(11,107,203,0) 0%, rgba(11,107,203,1) 100%)',
                                cursor: 'pointer',

                                fontSize: '0.469rem',
                                fontWeight: '500',
                                color: 'white',
                            },
                        },
                    })}
                    component={motion.div}
                    initial={{ translateY: 25 }}
                    whileInView={{
                        translateY: 0,
                        transition: {
                            type: 'spring',
                            bounce: 1,
                            damping: 3 + index,
                        },
                    }}
                    onClick={() => navigate(`/product/${product.documentId}`)}
                >
                    <Image
                        ratio='1.54/1'
                        src={`${import.meta.env.VITE_REACT_APP_BACKEND}${product.images[0].url}`}
                        width={{ sm: '10rem', md: '5.859rem' }}
                        objectFit='contain'
                        alt='product'
                    />
                </Grid>
            ))}
        </Grid>
    );
}

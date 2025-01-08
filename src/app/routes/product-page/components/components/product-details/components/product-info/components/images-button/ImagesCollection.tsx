import { Stack } from '@mui/joy';
import Image from 'src/components/Image';
import theme from 'src/config/theme';
import { SingleProductPageContext } from 'src/app/routes/product-page/context/useSingleProductPageContext';
import { useContext, useState } from 'react';

export default function ImagesCollection() {
    const productData = useContext(SingleProductPageContext);
    const [imageToRender, setImageToRender] = useState(0);

    return (
        <Stack
            direction='row'
            alignItems='center'
            gap={{ xs: '0.5rem', md: '0.703rem' }}
        >
            <Stack gap={{ xs: '0.5rem', md: '0.703rem' }}>
                {productData!.images.map((image, index) => (
                    <Image
                        key={`product-image${image.documentId}`}
                        ratio='1/1'
                        src={`${import.meta.env.VITE_REACT_APP_BACKEND}${image.url}`}
                        width={{ xs: '3.5rem', md: '2.344rem' }}
                        objectFit='contain'
                        otherStyles={{
                            bgcolor: 'white',
                            borderRadius: { xs: '0.5rem', md: '0.352rem' },
                            boxShadow: theme.shadow.productPageImage,
                            // border: `1px solid ${theme.palette.primary[500]}`,
                            cursor: 'pointer',
                        }}
                        alt='Product'
                        animate={{
                            initial: { translateY: '50%' },
                            animate: {
                                translateY: '0',
                                transition: {
                                    type: 'spring',
                                    bounce: 1,
                                    damping: 7 + index,
                                },
                            },
                        }}
                        action={() => setImageToRender(index)}
                    />
                ))}
            </Stack>
            <Image
                ratio='1/1'
                src={`${import.meta.env.VITE_REACT_APP_BACKEND}${productData!.images[imageToRender].url}`}
                width={{ xs: '13rem', md: '8.906rem' }}
                objectFit='contain'
                otherStyles={{
                    bgcolor: 'white',
                    borderRadius: { xs: '0.5rem', md: '0.352rem' },
                    boxShadow: theme.shadow.productPageImage,
                }}
                alt='Product'
                animate={{
                    initial: { rotateX: '90deg', transformOrigin: 'top' },
                    animate: {
                        rotateX: 0,
                        transition: {
                            delay: 0.5,
                            type: 'spring',
                            bounce: 1,
                            damping: 10,
                        },
                    },
                }}
            />
        </Stack>
    );
}

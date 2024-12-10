import { Stack } from '@mui/joy';
import Image from 'src/components/Image';
import Content from './components/Content';
import { useLocation } from 'react-router-dom';
import { Product } from 'src/types/product';

import { ProductCardComtext } from './context/useProductCardContext';
import FallbackImg from './assets/images/fallback.svg';

export default function ProductCard(props: { data?: Product }) {
    const { pathname } = useLocation();

    return (
        <ProductCardComtext.Provider value={props.data}>
            <Stack
                sx={(theme) => ({
                    maxWidth: { xs: '11.438rem', md: '7.998rem' },
                    borderRadius: { xs: '0.75rem', md: '0.703rem' },
                    bgcolor:
                        pathname === '/' ? theme.palette.neutral[800] : 'white',
                    boxShadow:
                        pathname !== '/'
                            ? '0 0.1rem 0.25rem 0.1rem rgba(0,0,0,0.25)'
                            : 'unset',
                })}
            >
                <Image
                    src={
                        /** An unlogical error is occuring here if I dont use !beofre props */
                        props.data
                            ? `${import.meta.env.VITE_REACT_APP_BACKEND}${props.data.images[0].url}`
                            : FallbackImg
                    }
                    ratio='1.53/1'
                    width={{ xs: '11.438rem', md: '7.998rem' }}
                    objectFit='contain'
                    alt='Product '
                />
                <Content />
            </Stack>
        </ProductCardComtext.Provider>
    );
}

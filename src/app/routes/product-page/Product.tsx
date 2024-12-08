import { Stack } from '@mui/joy';
import ProductDetails from './components/ProductDetails';
import SuggestedProducts from './components/SuggestedProducts';

import Image from 'src/components/Image';
import Blob from 'src/assets/images/svg/single-product-page/blob.svg';

export default function Product() {
    return (
        <Stack
            direction={{ md: 'row' }}
            mt={{ xs: '4.25rem', md: '4.688rem' }}
            pb={{ md: '3.5rem' }}
            gap={{ xs: '3rem', md: 'auto' }}
            justifyContent={{ md: 'space-between' }}
            position='relative'
            overflow='visible'
        >
            <ProductDetails />
            <SuggestedProducts />

            <Image
                ratio='1.03/1'
                src={Blob}
                width={{ xs: '19.438rem', md: '22.529rem' }}
                objectFit='contain'
                otherStyles={{
                    position: 'absolute',
                    top: 0,
                    right: { xs: '-1.25rem', md: '9.813rem' },
                    zIndex: -1,
                }}
                alt='Blob'
            />
        </Stack>
    );
}

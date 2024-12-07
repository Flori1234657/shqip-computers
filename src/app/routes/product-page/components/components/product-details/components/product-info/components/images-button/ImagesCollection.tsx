import { Stack } from '@mui/joy';
import Image from 'src/components/Image';
import Placeholder from 'src/assets/images/placeholder.png';
import theme from 'src/config/theme';

export default function ImagesCollection() {
    return (
        <Stack direction='row' alignItems='center' gap={{ xs: '0.5rem' }}>
            <Stack gap={{ xs: '0.5rem' }}>
                {[1, 2, 3].map((image) => (
                    <Image
                        key={image}
                        ratio='1/1'
                        src={Placeholder}
                        width={{ xs: '3.5rem', md: '2.344rem' }}
                        objectFit='contain'
                        otherStyles={{
                            borderRadius: '0.5rem',
                            boxShadow: theme.shadow.productPageImage,
                            cursor: 'pointer',
                        }}
                        alt='Product'
                    />
                ))}
            </Stack>
            <Image
                ratio='1/1'
                src={Placeholder}
                width={{ xs: '13rem', md: '8.906rem' }}
                objectFit='contain'
                otherStyles={{
                    borderRadius: '0.5rem',
                    boxShadow: theme.shadow.productPageImage,
                }}
                alt='Product'
            />
        </Stack>
    );
}

import { Stack } from '@mui/joy';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';
import ImagesButton from './components/product-info/ImagesButton';
import Details from './components/product-info/Details';

export default function ProductInfo() {
    const { width } = useWindowDimensions();

    return (
        <Stack direction={{ md: 'row' }} gap={{ md: '0.703rem' }}>
            {width < 900 ? (
                <ImagesButton>
                    <Details />
                </ImagesButton>
            ) : (
                <>
                    <ImagesButton />
                    <Details />
                </>
            )}
        </Stack>
    );
}

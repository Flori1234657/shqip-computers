import { Stack } from '@mui/joy';
import Carousel from 'src/components/carousel/Carousel';
import PlaceholderImage from 'src/assets/images/placeholder.png';
import Image from 'src/components/Image';

function DownContent() {
    const offerProducts = [
        {
            id: '1829hsbn8xhx2',
            image: PlaceholderImage,
        },
        {
            id: '8329c939jsnjsnj',
            image: PlaceholderImage,
        },
        {
            id: '91xsnuxajjasa2',
            image: PlaceholderImage,
        },
        {
            id: '190xnsuhjana9',
            image: PlaceholderImage,
        },
        {
            id: 'hduaaioj901ao',
            image: PlaceholderImage,
        },
    ];

    return (
        <Stack
            width={{ sm: '100%' }}
            direction='row'
            alignItems='center'
            justifyContent='space-between'
        >
            <Carousel
                elements={offerProducts.map((product) => (
                    <Stack
                        key={`card-image-product${product.id}`}
                        sx={(theme) => ({
                            backgroundColor: theme.palette.neutral[800],
                            borderRadius: { xs: '0.5rem', md: '0.352rem' },
                        })}
                    >
                        <Image
                            ratio='1.54/1'
                            src={product.image}
                            width={{ xs: '10rem', md: '5.859rem' }}
                            alt='product'
                        />
                    </Stack>
                ))}
                secondStackStyles={{
                    maxWidth: { xs: '10rem', sm: '20rem', md: '100%' },
                    height: { xs: '6.503rem', md: 'auto' },
                    gap: { xs: '1.5rem', md: '1.641rem' },
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    pl: { sm: '13rem', md: 0 },
                    borderRadius: { xs: '0.5rem', md: '0.352rem' },
                    overflow: 'hidden',
                }}
            />
        </Stack>
    );
}

export default DownContent;

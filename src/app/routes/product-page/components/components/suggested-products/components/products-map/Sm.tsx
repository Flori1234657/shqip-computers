import { Stack } from '@mui/joy';
import Carousel from 'src/components/carousel/Carousel';
import Image from 'src/components/Image';
import PlaceholderImage from 'src/assets/images/placeholder.png';

export default function Sm() {
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
            width='100%'
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            sx={{ pb: '0.5rem' }}
        >
            <Carousel
                elements={offerProducts.map((product) => (
                    <Stack
                        key={`card-image-product${product.id}`}
                        sx={{
                            borderRadius: { xs: '0.5rem' },
                        }}
                    >
                        <Image
                            ratio='1.54/1'
                            src={product.image}
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

import { Stack } from '@mui/joy';
import PlaceholderImage from 'src/assets/images/placeholder.png';
import Image from 'src/components/Image';

function CardImages() {
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
        <>
            {offerProducts.map((product) => (
                <Stack
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
        </>
    );
}

export default CardImages;

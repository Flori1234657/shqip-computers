import { AspectRatio, IconButton, Stack } from '@mui/joy';
import {
    FaArrowRight as RightArrIcon,
    FaArrowLeft as LeftArrIcon,
} from 'react-icons/fa6';
import PlaceholderImage from 'src/assets/images/placeholder.png';

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
        <Stack>
            <IconButton>
                <LeftArrIcon />
            </IconButton>
            <Stack>
                {offerProducts.map((product) => (
                    <AspectRatio>
                        <img src={product.image} alt='product' />
                    </AspectRatio>
                ))}
            </Stack>
            <IconButton>
                <RightArrIcon />
            </IconButton>
        </Stack>
    );
}

export default DownContent;

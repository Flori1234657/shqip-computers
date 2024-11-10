import { AspectRatio, Stack, Typography } from '@mui/joy';
import Image from 'src/assets/images/svg/home/brands-image.png';

function BrandsSection() {
    return (
        <Stack>
            <Typography>Brand’s you can find here 🔎</Typography>

            <AspectRatio ratio='1.15/1'>
                <img src={Image} alt='logo collection' />
            </AspectRatio>
        </Stack>
    );
}

export default BrandsSection;

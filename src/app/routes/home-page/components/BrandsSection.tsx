import { Stack, Typography } from '@mui/joy';
import LogoCollection from 'src/assets/images/svg/home/brands-image.png';
import Image from 'src/components/Image';

function BrandsSection() {
    return (
        <Stack mt='10.75rem' gap='2rem'>
            <Typography
                textAlign='center'
                level='title-md'
                sx={(theme) => ({
                    textAlign: 'center',
                    color: theme.palette.primary[800],
                })}
            >
                Brand’s you can find here 🔎
            </Typography>

            <Image
                ratio='1.15/1'
                src={LogoCollection}
                width='17rem'
                alt='logo collection'
            />
        </Stack>
    );
}

export default BrandsSection;

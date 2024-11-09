import { AspectRatio, Stack, Typography } from '@mui/joy';
//✨ Need to improve the performance
import Image from 'src/assets/images/logo.png';

export default function Logo() {
    return (
        <Stack>
            <AspectRatio ratio='1/1'>
                <img src={Image} alt='logo of the website' />
            </AspectRatio>

            {/** 🖥️ Remove text on pc size */}
            <Typography>ShqipComputers</Typography>
        </Stack>
    );
}

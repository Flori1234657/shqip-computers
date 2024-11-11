import { Stack, Typography } from '@mui/joy';
import Image from 'src/components/Image';
import Img from 'src/assets/images/logo.svg';

export default function Logo() {
    return (
        <Stack direction='row' alignItems='center' gap='0.25rem'>
            <Image
                ratio='1/1'
                src={Img}
                alt='logo of the website'
                width='2rem'
            />

            {/** 🖥️ Remove text on pc size */}
            <Typography
                fontSize='md'
                fontFamily='Poppins'
                fontWeight='600'
                sx={(theme) => ({ color: theme.palette.primary[900] })}
            >
                ShqipComputers
            </Typography>
        </Stack>
    );
}

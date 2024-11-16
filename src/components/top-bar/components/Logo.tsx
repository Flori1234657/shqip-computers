import { Stack, Typography } from '@mui/joy';
import Image from 'src/components/Image';
import Img from 'src/assets/images/logo.svg';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function Logo() {
    const { width } = useWindowDimensions();

    return (
        <Stack direction='row' alignItems='center' gap='0.25rem'>
            <Image
                ratio='1/1'
                src={Img}
                alt='logo of the website'
                width={{ xs: '2rem', md: '2.344rem' }}
            />

            {width > 899 ? (
                ''
            ) : (
                <Typography
                    fontSize='md'
                    fontFamily='Poppins'
                    fontWeight='600'
                    sx={(theme) => ({ color: theme.palette.primary[900] })}
                >
                    ShqipComputers
                </Typography>
            )}
        </Stack>
    );
}

import { Stack, Typography } from '@mui/joy';
import Image from 'src/components/Image';
import Logo from 'src/assets/images/logo-no-bckg.png';

function CompanyInfo() {
    return (
        <Stack gap='0.5rem'>
            <Image ratio='1/1' src={Logo} width='4.5rem' alt='logo' />
            <Typography
                fontFamily='Poppins'
                fontWeight='600'
                fontSize='lg'
                lineHeight='1.2'
                letterSpacing='0.5px'
                sx={(theme) => ({ color: theme.palette.neutral[800] })}
            >
                Shqip Computers
            </Typography>
            <Typography
                mt='0.25rem'
                level='body-md'
                lineHeight='1.2'
                sx={(theme) => ({
                    color: theme.palette.neutral[700],
                    maxWidth: '12.375rem',
                })}
            >
                Lorem ipsum dolor sit amet consectetur. Volutpat eget euismod
                sed urna varius tortor malesuada. Suspendisse nunc augue
                habitant eget in praesent imperdiet.
            </Typography>
        </Stack>
    );
}

export default CompanyInfo;

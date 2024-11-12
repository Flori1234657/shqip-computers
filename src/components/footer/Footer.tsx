import { Stack, Typography } from '@mui/joy';
import Image from '../Image';
import Wave from 'src/assets/images/svg/footer-wave.png';
import CompanyInfo from './components/CompanyInfo';
import HomeNavigation from './components/HomeNavigation';
import SocialNetworks from './components/SocialNetworks';
import ContactUs from './components/ContactUs';

export default function Footer() {
    return (
        <footer style={{ marginTop: '10.75rem' }}>
            <Image ratio='13.91/1' src={Wave} width='20rem' alt='wave' />
            <Stack
                gap='2rem'
                px='1.25rem'
                py='1.5rem'
                sx={(theme) => ({
                    backgroundImage: theme.palette.gradient.blob,
                })}
            >
                <CompanyInfo />
                <HomeNavigation />
                <SocialNetworks />
                <ContactUs />
            </Stack>
            <Stack
                sx={(theme) => ({
                    bgcolor: theme.palette.primary[900],
                    pt: '0.25rem',
                    pb: '8rem',
                    alignItems: 'center',
                })}
            >
                <Typography
                    fontFamily='Poppins'
                    fontSize='sm'
                    lineHeight='1.2'
                    sx={{ color: 'white' }}
                >
                    All rights reserved © Shqip Computers
                </Typography>
            </Stack>
        </footer>
    );
}

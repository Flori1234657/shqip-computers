import { Stack, Typography } from '@mui/joy';
import Image from '../Image';
import Wave from 'src/assets/images/svg/footer-wave.svg';
import CompanyInfo from './components/CompanyInfo';
import HomeNavigation from './components/HomeNavigation';
import SocialNetworks from './components/SocialNetworks';
import ContactUs from './components/ContactUs';

export default function Footer() {
    return (
        <footer
            style={{
                position: 'relative',
            }}
        >
            <Image
                ratio='13.91/1'
                src={Wave}
                width='100%'
                alt='wave'
                otherStyles={{
                    position: 'absolute',
                    top: '-1.4rem',
                }}
            />
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
                    py: '0.25rem',
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

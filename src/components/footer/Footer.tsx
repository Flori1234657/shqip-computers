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
                    top: { xs: '-1.4rem', md: '-3.8rem' },
                }}
            />
            <Stack
                direction={{ md: 'row' }}
                gap={{ xs: '2rem', md: 'auto' }}
                justifyContent={{ md: 'space-between' }}
                alignItems={{ md: 'center' }}
                px={{ xs: '1.25rem', md: '7.031rem' }}
                py={{ xs: '1.5rem', md: '1.172rem' }}
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
                    py: { xs: '0.25rem', md: '0.234rem' },
                    alignItems: 'center',
                })}
            >
                <Typography
                    fontFamily='Poppins'
                    fontSize={{ xs: 'sm', md: '0.563rem' }}
                    lineHeight='1.2'
                    sx={{ color: 'white' }}
                >
                    All rights reserved © Shqip Computers
                </Typography>
            </Stack>
        </footer>
    );
}

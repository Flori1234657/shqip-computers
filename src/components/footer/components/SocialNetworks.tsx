import { Link, List, ListItem, Stack, Typography } from '@mui/joy';
import { Link as RouterLink } from 'react-router-dom';
import {
    PiInstagramLogo as IgIcon,
    PiTiktokLogo as TikTokIcon,
    PiFacebookLogoBold as FbIcon,
} from 'react-icons/pi';
import theme from 'src/config/theme';
import { motion } from 'motion/react';
import { heroTextVariants } from 'src/animations/home-page/hero-variants';

function SocialNetworks() {
    const networks = [
        {
            text: '@shqip_computers',
            icon: <IgIcon />,
            goTo: 'https://www.linkedin.com/in/florian-dollani/',
        },
        {
            text: '@shqip_computers',
            icon: <TikTokIcon />,
            goTo: 'https://www.linkedin.com/in/florian-dollani/',
        },
        {
            text: 'Ship Computers',
            icon: <FbIcon />,
            goTo: 'https://www.linkedin.com/in/florian-dollani/',
        },
    ];

    return (
        <Stack
            gap={{ xs: '0.5rem', md: '0.469rem' }}
            height={{ md: '6.743rem' }}
        >
            <Typography
                fontFamily='Poppins'
                fontWeight='500'
                fontSize={{ xs: 'lg', md: '0.809rem' }}
                lineHeight='1.6'
                sx={(theme) => ({ color: theme.palette.neutral[800] })}
                component={motion.h3}
                variants={heroTextVariants}
                initial='initialHeading'
                whileInView='animateHeading'
            >
                Social network's
            </Typography>
            <List sx={{ gap: { xs: '0.5rem', md: '0.234rem' } }}>
                {networks.map((network, index) => (
                    <ListItem key={`footer-social-networks${index}`}>
                        <Link component={RouterLink} to={network.goTo}>
                            <Typography
                                level='body-lg'
                                fontWeight='400'
                                lineHeight='1.2'
                                sx={{
                                    fontSize: { md: '0.674rem' },
                                    color: theme.palette.neutral[700],
                                    maxWidth: '12.375rem',
                                }}
                                slotProps={{
                                    startDecorator: {
                                        style: {
                                            color: theme.palette.primary[500],
                                        },
                                    },
                                }}
                                startDecorator={network.icon}
                                component={motion.h4}
                                variants={heroTextVariants}
                                initial='initialSubHeading'
                                whileInView='animateSubHeading'
                            >
                                {network.text}
                            </Typography>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}

export default SocialNetworks;

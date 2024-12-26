import { Link, List, ListItem, Stack, Typography } from '@mui/joy';
import { motion } from 'motion/react';
import { Link as RouterLink } from 'react-router-dom';
import { heroTextVariants } from 'src/animations/home-page/hero-variants';

function HomeNavigation() {
    const homeLinks = [
        {
            text: 'Search screen 🔎',
            to: '#hero',
        },
        {
            text: 'Deals 🏷️',
            to: '#deals',
        },
        {
            text: 'Build pc 🛠️',
            to: '#build-pc',
        },
        {
            text: 'Sell pc 💸',
            to: '#sell-pc',
        },
        {
            text: 'Testimonials 💬',
            to: '#testimonials',
        },
    ];

    return (
        <Stack gap={{ xs: '0.5rem', md: '0.469rem' }}>
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
                Home navigation
            </Typography>
            <List
                sx={{
                    gap: { xs: '0.5rem', md: '0.234rem' },
                }}
            >
                {homeLinks.map((link) => (
                    <ListItem key={`footer-nav-link${link.to}`}>
                        <Link component={RouterLink} to={link.to}>
                            <Typography
                                level='body-lg'
                                fontWeight='400'
                                lineHeight='1.2'
                                sx={(theme) => ({
                                    fontSize: { md: '0.674rem' },
                                    color: theme.palette.neutral[700],
                                    maxWidth: '12.375rem',
                                })}
                                component={motion.h4}
                                variants={heroTextVariants}
                                initial='initialSubHeading'
                                whileInView='animateSubHeading'
                            >
                                {link.text}
                            </Typography>{' '}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}

export default HomeNavigation;

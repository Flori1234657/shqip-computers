import { Button, Link, List, ListItem, Stack, Typography } from '@mui/joy';
import { Link as RouterLink } from 'react-router-dom';
import { PiPhone as PhoneIcon, PiEnvelope as MailIcon } from 'react-icons/pi';
import { SlLocationPin as LocationIcon } from 'react-icons/sl';
import theme from 'src/config/theme';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';
import { motion } from 'motion/react';
import { heroTextVariants } from 'src/animations/home-page/hero-variants';

function ContactUs() {
    const { width } = useWindowDimensions();

    const contacts = [
        {
            text: '+355 68 839 3968',
            icon: <PhoneIcon />,
            goTo: 'tel:+355 68 839 3968',
        },
        {
            text: 'shqipcomputers@gmail.com',
            icon: <MailIcon />,
            goTo: 'mail:+355 68 839 3968',
        },
        {
            text: 'Maps location',
            icon: <LocationIcon />,
            goTo: 'https://maps.app.goo.gl/Qokjph2AMYbWZLLk7',
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
                Contact us
            </Typography>
            <List
                sx={{
                    gap: { xs: '0.5rem', md: '0.234rem' },
                    maxHeight: 'fit-content',
                }}
            >
                {contacts.map((contact) => (
                    <ListItem key={`contact-us-link${contact.text}`}>
                        <Link component={RouterLink} to={contact.goTo}>
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
                                startDecorator={contact.icon}
                                component={motion.h4}
                                variants={heroTextVariants}
                                initial='initialSubHeading'
                                whileInView='animateSubHeading'
                            >
                                {contact.text}
                            </Typography>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Button
                size={width > 899 ? 'xs' : 'md'}
                endDecorator={<PhoneIcon />}
                sx={{
                    mt: { xs: '0.25rem', md: 0 },
                    width: 'fit-content',
                }}
                component={motion.button}
                variants={heroTextVariants}
                initial='initialSubHeading'
                whileInView='animateSubHeading'
            >
                Contact Form
            </Button>
        </Stack>
    );
}

export default ContactUs;

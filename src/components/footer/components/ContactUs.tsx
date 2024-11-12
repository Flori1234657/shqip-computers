import { Button, Link, List, ListItem, Stack, Typography } from '@mui/joy';
import { Link as RouterLink } from 'react-router-dom';
import { PiPhone as PhoneIcon, PiEnvelope as MailIcon } from 'react-icons/pi';
import { SlLocationPin as LocationIcon } from 'react-icons/sl';
import theme from 'src/config/theme';

function ContactUs() {
    const contacts = [
        {
            text: '+355 68 839 3968',
            icon: <PhoneIcon />,
            goTo: 'https://',
        },
        {
            text: 'shqipcomputers@gmail.com',
            icon: <MailIcon />,
            goTo: 'https://',
        },
        {
            text: 'Maps location',
            icon: <LocationIcon />,
            goTo: 'https://',
        },
    ];

    return (
        <Stack gap='0.5rem'>
            <Typography
                fontFamily='Poppins'
                fontWeight='500'
                fontSize='lg'
                lineHeight='1.6'
                sx={(theme) => ({ color: theme.palette.neutral[800] })}
            >
                Contact us
            </Typography>
            <List
                sx={{
                    gap: '0.5rem',
                }}
            >
                {contacts.map((contact) => (
                    <ListItem>
                        <Link component={RouterLink} to={contact.goTo}>
                            <Typography
                                level='body-lg'
                                fontWeight='400'
                                lineHeight='1.2'
                                sx={{
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
                            >
                                {contact.text}
                            </Typography>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Button
                endDecorator={<PhoneIcon />}
                sx={{ mt: '0.25rem', width: 'fit-content' }}
            >
                Contact Form
            </Button>
        </Stack>
    );
}

export default ContactUs;

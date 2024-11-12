import { Link, List, ListItem, Stack, Typography } from '@mui/joy';
import { Link as RouterLink } from 'react-router-dom';

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
        <Stack gap='0.5rem'>
            <Typography
                fontFamily='Poppins'
                fontWeight='500'
                fontSize='lg'
                lineHeight='1.6'
                sx={(theme) => ({ color: theme.palette.neutral[800] })}
            >
                Home navigation
            </Typography>
            <List
                sx={{
                    gap: '0.5rem',
                }}
            >
                {homeLinks.map((link) => (
                    <ListItem>
                        <Link component={RouterLink} to={link.to}>
                            <Typography
                                level='body-lg'
                                fontWeight='400'
                                lineHeight='1.2'
                                sx={(theme) => ({
                                    color: theme.palette.neutral[700],
                                    maxWidth: '12.375rem',
                                })}
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

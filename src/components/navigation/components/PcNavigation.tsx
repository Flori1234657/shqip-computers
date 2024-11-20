import { List, ListItem, Link, Typography } from '@mui/joy';
import { Link as RouterLink, useLocation } from 'react-router-dom';

function PcNavigation() {
    const location = useLocation();

    const navLinks = [
        {
            text: 'Home',
            path: '/',
        },
        {
            text: 'Shop',
            path: '/shop',
        },
        {
            text: 'About Us',
            path: '/about-us',
        },
        {
            text: 'Contact Us',
            path: '/contact-us',
        },
    ];

    return (
        <nav>
            <List sx={{ flexDirection: 'row', gap: '2.344rem' }}>
                {navLinks.map((link) => (
                    <ListItem key={`pc-navigation-link${link.path}`}>
                        <Link component={RouterLink} to={link.path}>
                            <Typography
                                fontSize='0.563rem'
                                lineHeight='1.5'
                                fontWeight='600'
                                sx={(theme) => ({
                                    color:
                                        location.pathname == link.path
                                            ? theme.palette.primary[500]
                                            : theme.palette.neutral[500],
                                })}
                            >
                                {link.text}
                            </Typography>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </nav>
    );
}

export default PcNavigation;

import { List, ListItem, Link } from '@mui/joy';
import { Link as RouterLink } from 'react-router-dom';

function PcNavigation() {
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
        <List>
            {navLinks.map((link) => (
                <ListItem>
                    <Link component={RouterLink} to={link.path}>
                        {link.text}
                    </Link>
                </ListItem>
            ))}
        </List>
    );
}

export default PcNavigation;

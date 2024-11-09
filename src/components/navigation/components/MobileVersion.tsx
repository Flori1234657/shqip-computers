import { useNavigate } from 'react-router-dom';
import {
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemContent,
    ListItemDecorator,
    Stack,
} from '@mui/joy';
import {
    MdOutlineHome as HomeIcon,
    MdOutlineLocalPhone as ContactIcon,
    MdOutlinePages as CategoryIcon,
} from 'react-icons/md';
import { BsShop as ShopIcon, BsInfoLg as InfoIcon } from 'react-icons/bs';

export default function MobileVersion() {
    const navigate = useNavigate();

    const navLinks = [
        {
            text: 'Home',
            path: '/',
            icon: <HomeIcon />,
        },
        {
            text: 'Shop',
            path: '/shop',
            icon: <ShopIcon />,
        },
        {
            text: 'About',
            path: '/about-us',
            icon: <InfoIcon />,
        },
        {
            text: 'Contact',
            path: '/contact-us',
            icon: <ContactIcon />,
        },
    ];

    return (
        <Stack>
            <IconButton>
                <CategoryIcon />
            </IconButton>
            <List>
                {navLinks.map((link) => (
                    <ListItem>
                        <ListItemButton onClick={() => navigate(link.path)}>
                            <ListItemDecorator>{link.icon}</ListItemDecorator>
                            <ListItemContent>{link.text}</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}

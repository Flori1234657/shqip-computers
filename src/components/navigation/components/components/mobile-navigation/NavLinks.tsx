import { List } from '@mui/joy';
import {
    MdOutlineHome as HomeIcon,
    MdOutlineLocalPhone as ContactIcon,
} from 'react-icons/md';
import { BsShop as ShopIcon, BsInfoLg as InfoIcon } from 'react-icons/bs';
import { lazy, Suspense } from 'react';

const LinksMap = lazy(() => import('./components/nav-links/LinksMap'));

function NavLinks() {
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
        <List
            sx={{
                '--ListItem-minHeight': 'unset',
                '--ListItem-paddingY': 'unset',
                '--ListItem-paddingX': 'unset',
                '--ListItem-gap': 'unset',
                '--ListItemDecorator-size': 'unset',
                paddingBlock: 0,

                flexDirection: 'row',
                gap: '1.5rem',
                justifyContent: 'flex-end',
            }}
        >
            <Suspense fallback=''>
                <LinksMap navLinks={navLinks} />
            </Suspense>
        </List>
    );
}

export default NavLinks;

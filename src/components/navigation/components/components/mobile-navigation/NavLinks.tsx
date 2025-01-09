import { useLocation, useNavigate } from 'react-router-dom';
import {
    List,
    ListItem,
    ListItemButton,
    ListItemContent,
    ListItemDecorator,
    Typography,
} from '@mui/joy';
import {
    MdOutlineHome as HomeIcon,
    MdOutlineLocalPhone as ContactIcon,
} from 'react-icons/md';
import { BsShop as ShopIcon, BsInfoLg as InfoIcon } from 'react-icons/bs';
import { motion } from 'motion/react';

function NavLinks() {
    const navigate = useNavigate();
    const location = useLocation();

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
            {navLinks.map((link, index) => (
                <ListItem
                    key={`monile-nav-links${link.path}`}
                    sx={{
                        position:
                            location.pathname == link.path
                                ? 'relative'
                                : 'initial',
                        top: '-60%',
                        height: 'fit-content',
                    }}
                >
                    <ListItemButton
                        onClick={() => navigate(link.path)}
                        sx={{
                            flexDirection: 'column',
                            padding: 0,
                            gap: location.pathname == link.path ? '0.25rem' : 0,
                            width: 'auto',
                            ':hover': {
                                backgroundColor: 'transparent !important',
                            },
                        }}
                        component={motion.div}
                        whileTap={{
                            translateY: -160,
                            transition: { duration: 0.75 },
                        }}
                    >
                        <ListItemDecorator
                            sx={(theme) => ({
                                minInlineSize: 'unset',

                                width:
                                    location.pathname == link.path
                                        ? '2.5rem'
                                        : '2rem',
                                height:
                                    location.pathname == link.path
                                        ? '2.5rem'
                                        : '2rem',
                                justifyContent: 'center',
                                borderRadius: '100%',
                                bgcolor: theme.palette.primary[500],
                                outline:
                                    location.pathname == link.path
                                        ? '0.25rem solid white'
                                        : 0,

                                color: 'white',

                                '& > svg': {
                                    width: 'auto',
                                    height: '1rem',
                                },
                            })}
                            component={motion.span}
                            initial={{ translateY: 20, opacity: 0 }}
                            animate={{
                                translateY: 0,
                                opacity: 1,
                                transition: {
                                    delay: 0.25,
                                    duration: `0.${5 + index}5`,
                                },
                            }}
                        >
                            {link.icon}
                        </ListItemDecorator>
                        <ListItemContent>
                            <Typography
                                fontSize='xs'
                                lineHeight='1.5'
                                sx={{
                                    color: 'white',
                                    fontWeight:
                                        location.pathname == link.path
                                            ? '500'
                                            : '400',
                                }}
                                component={motion.span}
                                initial={{ translateY: 15, opacity: 0 }}
                                animate={{
                                    translateY: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 0.25,
                                        duration: `0.${6 + index}5`,
                                    },
                                }}
                            >
                                {link.text}
                            </Typography>
                        </ListItemContent>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
}

export default NavLinks;

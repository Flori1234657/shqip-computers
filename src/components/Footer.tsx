import { Button, Link, List, ListItem, Stack, Typography } from '@mui/joy';
import { Link as RouterLink } from 'react-router-dom';
import Image from './Image';
import Wave from 'src/assets/images/svg/footer-wave.png';
import Logo from 'src/assets/images/logo-no-bckg.png';
import {
    PiInstagramLogo as IgIcon,
    PiTiktokLogo as TikTokIcon,
    PiFacebookLogoBold as FbIcon,
    PiPhone as PhoneIcon,
    PiEnvelope as MailIcon,
} from 'react-icons/pi';
import { SlLocationPin as LocationIcon } from 'react-icons/sl';

export default function Footer() {
    return (
        <footer>
            <Image ratio='13.91/1' src={Wave} alt='wave' />
            <Stack>
                <Stack>
                    <Image ratio='1/1' src={Logo} alt='logo' />
                    <Typography>Shqip Computers</Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur. Volutpat eget
                        euismod sed urna varius tortor malesuada. Suspendisse
                        nunc augue habitant eget in praesent imperdiet.
                    </Typography>
                </Stack>
                <Stack>
                    <Typography>Home navigation</Typography>
                    <List>
                        <ListItem>
                            <Link component={RouterLink} to='#hero'>
                                Search screen 🔎
                            </Link>
                            <Link component={RouterLink} to='#deals'>
                                Deals 🏷️
                            </Link>
                            <Link component={RouterLink} to='#build-pc'>
                                Build pc 🛠️
                            </Link>
                            <Link component={RouterLink} to='#sell-pc'>
                                Sell pc 💸
                            </Link>
                            <Link component={RouterLink} to='#testimonials'>
                                Testimonials 💬
                            </Link>
                        </ListItem>
                    </List>
                </Stack>

                <Stack>
                    <Typography>Social network's</Typography>
                    <List>
                        <ListItem>
                            <Typography startDecorator={<IgIcon />}>
                                @shqip_computers
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography startDecorator={<TikTokIcon />}>
                                @shqip_computers
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography startDecorator={<FbIcon />}>
                                Ship Computers
                            </Typography>
                        </ListItem>
                    </List>
                </Stack>

                <Stack>
                    <Typography>Contact us</Typography>
                    <List>
                        <ListItem>
                            <Typography startDecorator={<PhoneIcon />}>
                                +355 68 839 3968
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography startDecorator={<MailIcon />}>
                                shqipcomputers@gmail.com
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography startDecorator={<LocationIcon />}>
                                Map's location
                            </Typography>
                        </ListItem>
                    </List>
                    <Button endDecorator={<PhoneIcon />}>Contact Form</Button>
                </Stack>
            </Stack>
            <Typography>All rights reserved © Shqip Computers</Typography>
        </footer>
    );
}

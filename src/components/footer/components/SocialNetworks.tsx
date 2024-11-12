import { Link, List, ListItem, Stack, Typography } from '@mui/joy';
import { Link as RouterLink } from 'react-router-dom';
import {
    PiInstagramLogo as IgIcon,
    PiTiktokLogo as TikTokIcon,
    PiFacebookLogoBold as FbIcon,
} from 'react-icons/pi';
import theme from 'src/config/theme';

function SocialNetworks() {
    const networks = [
        {
            text: '@shqip_computers',
            icon: <IgIcon />,
            goTo: 'https://',
        },
        {
            text: '@shqip_computers',
            icon: <TikTokIcon />,
            goTo: 'https://',
        },
        {
            text: 'Ship Computers',
            icon: <FbIcon />,
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
                Social network's
            </Typography>
            <List sx={{ gap: '0.5rem' }}>
                {networks.map((network) => (
                    <ListItem>
                        <Link component={RouterLink} to={network.goTo}>
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
                                startDecorator={network.icon}
                            >
                                {network.text}
                            </Typography>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}

export default SocialNetworks;

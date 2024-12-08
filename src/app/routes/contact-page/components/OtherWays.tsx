import { List, ListItem, Stack, Typography } from '@mui/joy';

export default function OtherWays() {
    return (
        <Stack gap={{ xs: '0.5rem' }}>
            <Typography
                level='body-lg'
                lineHeight='1.2'
                sx={(theme) => ({ color: theme.palette.primary[200] })}
            >
                Other way's
            </Typography>

            <List sx={{ gap: { xs: '0.25rem' } }}>
                <ListItem>
                    <Typography
                        fontSize={{ xs: '0.831rem' }}
                        fontWeight='500'
                        lineHeight='1.2'
                        sx={{ color: 'white' }}
                    >
                        📞 +355 68 839 3968
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography
                        fontSize={{ xs: '0.831rem' }}
                        fontWeight='500'
                        lineHeight='1.2'
                        sx={{ color: 'white' }}
                    >
                        📩 shqip_comps@mail.info
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography
                        fontSize={{ xs: '0.831rem' }}
                        fontWeight='500'
                        lineHeight='1.2'
                        sx={{ color: 'white' }}
                    >
                        📷 @shqip-computers
                    </Typography>
                </ListItem>
            </List>
        </Stack>
    );
}

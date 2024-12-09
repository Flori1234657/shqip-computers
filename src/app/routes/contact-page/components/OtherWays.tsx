import { List, ListItem, Stack, Typography } from '@mui/joy';

export default function OtherWays() {
    const listItems = [
        {
            text: '📞 +355 68 839 3968',
        },
        {
            text: '📩 shqip_comps@mail.info',
        },
        {
            text: '📷 @shqip-computers',
        },
    ];

    return (
        <Stack gap={{ xs: '0.5rem', md: '0.234rem' }}>
            <Typography
                level='body-lg'
                lineHeight='1.2'
                fontSize={{ md: '0.674rem' }}
                sx={(theme) => ({ color: theme.palette.primary[200] })}
            >
                Other way's
            </Typography>

            <List sx={{ gap: { xs: '0.25rem', md: '0.234rem' } }}>
                {listItems.map((item) => (
                    <ListItem key={`contact-us-list-item${item.text}`}>
                        <Typography
                            fontSize={{ xs: '0.831rem', md: '0.469rem' }}
                            fontWeight='500'
                            lineHeight='1.2'
                            sx={{ color: 'white' }}
                        >
                            {item.text}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}

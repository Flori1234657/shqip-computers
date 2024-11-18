import { Stack, Typography } from '@mui/joy';

function HeadingText() {
    return (
        <Stack gap={{ xs: '0.5rem', md: '3.223rem' }}>
            <Typography
                level='title-sm'
                fontSize={{ md: '1.4rem' }}
                maxWidth={{ md: '9.938rem' }}
            >
                October <span style={{ color: '#C41C1C' }}>-20%</span> Deals!
            </Typography>
            <Typography
                fontSize={{ xs: 'md', md: '0.81rem' }}
                sx={(theme) => ({
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    lineHeight: '1.3',
                    alignSelf: { xs: 'flex-end', md: 'unset' },
                    color: theme.palette.danger[700],
                })}
            >
                Offer end's in:
            </Typography>
        </Stack>
    );
}

export default HeadingText;

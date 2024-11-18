import { Divider, Stack, Typography } from '@mui/joy';

function AvailableTimeCards() {
    const timesData = [
        {
            unit: '1',
            type: 'Day',
        },
        {
            unit: '23',
            type: 'Hour',
        },
        {
            unit: '36',
            type: 'Min',
        },
        {
            unit: '06',
            type: 'Sec',
        },
    ];

    return (
        <Stack gap={{ xs: '1.5rem', md: '0.703rem' }} direction={{ md: 'row' }}>
            {timesData.map((time) => (
                <Stack
                    alignItems='center'
                    sx={(theme) => ({
                        p: { xs: '0.25rem 0.5rem', md: '0.118rem 0.352rem' },
                        maxWidth: { xs: '3.375rem', md: '1.993rem' },
                        borderRadius: { xs: '0.5rem', md: '0.352rem' },

                        backgroundColor: theme.palette.primary[100],
                        boxShadow: '0 4px 4px 0 rgba(0, 0, 0,0.25)',
                    })}
                >
                    <Typography
                        fontSize={{ xs: 'md', md: '0.675rem' }}
                        sx={(theme) => ({
                            fontWeight: '700',
                            lineHeight: '1.4',
                            color: theme.palette.primary[900],
                        })}
                    >
                        {time.unit}
                    </Typography>
                    <Divider
                        orientation='horizontal'
                        sx={(theme) => ({
                            width: { xs: '1.875rem', md: '1.289rem' },
                            alignSelf: 'center',
                            backgroundColor: theme.palette.primary[900],
                            borderRadius: '0.5rem',
                        })}
                    />
                    <Typography
                        fontSize={{ xs: 'md', md: '0.675rem' }}
                        sx={(theme) => ({
                            fontWeight: '700',
                            lineHeight: '1.4',
                            color: theme.palette.primary[900],
                        })}
                    >
                        {time.type}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    );
}

export default AvailableTimeCards;

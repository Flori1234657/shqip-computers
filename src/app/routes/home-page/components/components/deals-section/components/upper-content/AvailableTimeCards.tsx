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
        <>
            {timesData.map((time) => (
                <Stack
                    alignItems='center'
                    sx={(theme) => ({
                        p: '0.25rem 0.5rem',
                        borderRadius: '0.5rem',

                        backgroundColor: theme.palette.primary[100],
                        boxShadow: '0 4px 4px 0 rgba(0, 0, 0,0.25)',
                    })}
                >
                    <Typography
                        fontSize='md'
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
                            width: '1.875rem',
                            alignSelf: 'center',
                            backgroundColor: theme.palette.primary[900],
                            borderRadius: '0.5rem',
                        })}
                    />
                    <Typography
                        fontSize='md'
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
        </>
    );
}

export default AvailableTimeCards;

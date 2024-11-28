import { Box, Slider, sliderClasses, Stack, Typography } from '@mui/joy';

function valueText(value: number) {
    return `$${value}`;
}

export default function PriceFilter() {
    return (
        <Stack gap={{ xs: '1.25rem' }}>
            <Typography
                level='body-lg'
                lineHeight='1.5'
                sx={(theme) => ({ color: theme.palette.primary[900] })}
            >
                Price
            </Typography>
            <Box sx={{ width: '100%' }}>
                <Slider
                    defaultValue={[0, 100]}
                    getAriaLabel={() => 'Amount'}
                    getAriaValueText={valueText}
                    marks={[
                        {
                            value: 0,
                            label: '$0',
                        },
                        {
                            value: 100,
                            label: '$3,500',
                        },
                    ]}
                    valueLabelDisplay='on'
                    sx={{
                        // Need both of the selectors to make it works on the server-side and client-side
                        [`& [style*="left:0%"], & [style*="left: 0%"]`]: {
                            [`&.${sliderClasses.markLabel}`]: {
                                transform: 'none',
                            },
                            [`& .${sliderClasses.valueLabel}`]: {
                                left: 'calc(var(--Slider-thumbSize) / 2)',
                                borderBottomLeftRadius: 0,
                                '&::before': {
                                    left: 0,
                                    transform: 'translateY(100%)',
                                    borderLeftColor: 'currentColor',
                                },
                            },
                        },
                        [`& [style*="left:100%"], & [style*="left: 100%"]`]: {
                            [`&.${sliderClasses.markLabel}`]: {
                                transform: 'translateX(-100%)',
                            },
                            [`& .${sliderClasses.valueLabel}`]: {
                                right: 'calc(var(--Slider-thumbSize) / 2)',
                                borderBottomRightRadius: 0,
                                '&::before': {
                                    left: 'initial',
                                    right: 0,
                                    transform: 'translateY(100%)',
                                    borderRightColor: 'currentColor',
                                },
                            },
                        },
                    }}
                />
            </Box>
        </Stack>
    );
}

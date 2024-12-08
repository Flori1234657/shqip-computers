import { Chip, Stack, Typography } from '@mui/joy';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function Status() {
    const { width } = useWindowDimensions();

    return (
        <Stack gap={{ xs: '0.25rem', md: '0.118rem' }}>
            <Typography
                fontSize={{ xs: '1rem', md: '0.675rem' }}
                fontWeight='600'
                lineHeight='1.6'
                sx={(theme) => ({ color: theme.palette.neutral[500] })}
            >
                Status
            </Typography>
            <Stack direction='row' gap={{ xs: '0.5rem', md: '0.234rem' }}>
                <Chip
                    size={width < 900 ? 'md' : 'md2'}
                    color='primary'
                    variant='solid'
                    sx={{ borderRadius: { xs: '0.5rem', md: '0.234rem' } }}
                >
                    ⚙️ Used
                </Chip>
                <Chip
                    size={width < 900 ? 'md' : 'md2'}
                    color='primary'
                    variant='solid'
                    sx={{ borderRadius: { xs: '0.5rem', md: '0.234rem' } }}
                >
                    ✔️ In Stock
                </Chip>
            </Stack>
        </Stack>
    );
}

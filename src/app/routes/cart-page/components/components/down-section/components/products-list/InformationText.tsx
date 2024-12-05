import { Stack, Typography } from '@mui/joy';
import theme from 'src/config/theme';

export default function InformationText() {
    const styles = {
        fontSize: '0.674rem',
        fontWeight: '600',
        color: theme.palette.neutral[500],
    };

    return (
        <Stack direction='row' justifyContent='space-between'>
            <Typography sx={{ ...styles }}>Product</Typography>
            <Typography sx={{ ...styles, ml: '6.2rem' }}>Quantity</Typography>
            <Typography sx={{ ...styles, mr: '4rem' }}>Price</Typography>
        </Stack>
    );
}

import { Typography } from '@mui/joy';

export default function NoItemInTheCard() {
    return (
        <Typography
            textAlign='center'
            fontFamily='Poppins'
            fontWeight='600'
            lineHeight='1.6'
            sx={(theme) => ({
                mt: { xs: '4.75rem', md: '0' },
                alignSelf: 'center',
                fontSize: { xs: '2.075rem', md: '1.401rem' },
                color: theme.palette.neutral[500],
            })}
        >
            Your card is empty 🛒
        </Typography>
    );
}

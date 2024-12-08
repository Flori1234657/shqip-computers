import { Typography } from '@mui/joy';

export default function Title() {
    return (
        <Typography
            lineHeight='1.2'
            fontWeight='600'
            fontSize={{ xs: '1.2rem', md: '0.972rem' }}
            sx={(theme) => ({ color: theme.palette.primary[900] })}
        >
            Suggested product’s
        </Typography>
    );
}

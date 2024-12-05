import { Typography } from '@mui/joy';

export default function TextValue({ text }: { text: string }) {
    return (
        <Typography
            lineHeight='1.6'
            fontWeight='500'
            fontFamily='Poppins'
            sx={(theme) => ({
                fontSize: { xs: '0.831rem', md: '0.675rem' },
                color: theme.palette.primary[200],
            })}
        >
            {text}
        </Typography>
    );
}

import { Typography } from '@mui/joy';

export default function ActionText({ text }: { text: string }) {
    return (
        <Typography
            lineHeight='1'
            fontWeight='500'
            sx={(theme) => ({
                fontSize: { xs: '0.694rem' },
                color: theme.palette.primary[300],
                textDecoration: 'underline',
            })}
        >
            {text}
        </Typography>
    );
}

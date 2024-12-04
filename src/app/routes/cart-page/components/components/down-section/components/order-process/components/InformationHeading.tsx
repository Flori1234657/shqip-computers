import { Typography } from '@mui/joy';

export default function InformationHeading({ text }: { text: string }) {
    return (
        <Typography
            lineHeight='1.6'
            fontWeight='500'
            sx={(theme) => ({
                fontSize: { xs: '0.831rem' },
                color: theme.palette.primary[200],
            })}
        >
            {text}
        </Typography>
    );
}

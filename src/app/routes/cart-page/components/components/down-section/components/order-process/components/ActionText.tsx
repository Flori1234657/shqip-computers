import { Typography } from '@mui/joy';

export default function ActionText({
    text,
    action,
}: {
    text: string;
    action: () => void;
}) {
    return (
        <Typography
            lineHeight='1'
            fontWeight='500'
            sx={(theme) => ({
                fontSize: { xs: '0.694rem', md: '0.563rem' },
                color: theme.palette.primary[300],
                textDecoration: 'underline',
                cursor: { md: 'pointer' },
            })}
            onClick={() => action()}
        >
            {text}
        </Typography>
    );
}

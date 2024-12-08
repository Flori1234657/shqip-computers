import { Typography } from '@mui/joy';

export default function Title() {
    return (
        <Typography
            level='title-sm'
            sx={(theme) => ({
                fontSize: { md: '1.166rem' },
                maxWidth: { md: '13.5rem' },
                color: theme.palette.primary[900],
            })}
        >
            Lenovo thinkpad g13th max ram 128gb
        </Typography>
    );
}

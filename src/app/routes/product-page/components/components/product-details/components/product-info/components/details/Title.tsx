import { Typography } from '@mui/joy';

export default function Title() {
    return (
        <Typography
            level='title-sm'
            sx={(theme) => ({ color: theme.palette.primary[900] })}
        >
            Lenovo thinkpad g13th max ram 128gb
        </Typography>
    );
}

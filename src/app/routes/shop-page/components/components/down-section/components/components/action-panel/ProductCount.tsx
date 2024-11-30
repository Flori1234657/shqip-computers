import { Typography } from '@mui/joy';

export default function ProductCount() {
    return (
        <Typography
            fontSize={{ xs: 'sm', md: '0.563rem' }}
            fontWeight='700'
            sx={(theme) => ({ color: theme.palette.neutral[500] })}
        >
            10 of 12300 products
        </Typography>
    );
}

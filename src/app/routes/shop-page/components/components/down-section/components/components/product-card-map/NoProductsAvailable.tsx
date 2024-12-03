import { Typography } from '@mui/joy';

export default function NoProductsAvailable({ text }: { text?: string }) {
    return (
        <Typography
            level='title-sm'
            textAlign='center'
            fontSize={{ md: '1.4rem' }}
            sx={(theme) => ({
                color: text
                    ? theme.palette.danger[500]
                    : theme.palette.neutral[500],
                pt: { xs: '3rem' },
                maxWidth: { md: '20.813rem' },
            })}
        >
            {text ?? 'For the moment there are no available products 📦'}
        </Typography>
    );
}

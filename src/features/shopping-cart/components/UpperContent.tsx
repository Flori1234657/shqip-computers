import { IconButton, Stack, Typography } from '@mui/joy';
import { MdOutlineArrowForward as ArrowIcon } from 'react-icons/md';
import useCartStore from '../stores/shoppingCart';

function UpperContent() {
    const toggleShoppingCartVisibility = useCartStore(
        (state) => state.toggleIsVisible
    );

    return (
        <Stack gap={{ xs: '1rem' }}>
            <Stack
                gap={{ xs: '1rem' }}
                direction='row'
                alignItems='center'
                sx={(theme) => ({
                    pb: '0.5rem',
                    borderBottom: `1px solid ${theme.palette.neutral[500]}`,
                })}
            >
                <IconButton
                    variant='solid'
                    size='sm'
                    sx={(theme) => ({ bgcolor: theme.palette.neutral[900] })}
                    onClick={() => toggleShoppingCartVisibility()}
                >
                    <ArrowIcon />
                </IconButton>
                <Typography
                    fontSize={{ xs: 'lg' }}
                    fontWeight='600'
                    lineHeight='1.2'
                    sx={(theme) => ({ color: theme.palette.primary[900] })}
                >
                    Shopping cart
                </Typography>
            </Stack>
            <Typography
                alignSelf='flex-end'
                fontSize={{ xs: 'sm' }}
                fontWeight='500'
                lineHeight='1.2'
                sx={(theme) => ({ color: theme.palette.text.tertiary })}
            >
                25 products
            </Typography>
        </Stack>
    );
}

export default UpperContent;

import { IconButton, Stack, Typography } from '@mui/joy';
import { FaPlus as PlusIcon, FaMinus as MinusIcon } from 'react-icons/fa6';

function ActionButtons({ quantity }: { quantity: number }) {
    return (
        <Stack gap={{ xs: '0.5rem' }} direction='row' alignItems='center'>
            <IconButton
                variant='solid'
                size='xs2'
                sx={(theme) => ({ bgcolor: theme.palette.primary[900] })}
            >
                <MinusIcon />
            </IconButton>
            <Typography
                fontSize={{ xs: '1rem' }}
                fontWeight='600'
                lineHeight='1.2'
            >
                {quantity}
            </Typography>
            <IconButton
                variant='solid'
                size='xs2'
                sx={(theme) => ({ bgcolor: theme.palette.primary[900] })}
            >
                <PlusIcon />
            </IconButton>
        </Stack>
    );
}

export default ActionButtons;

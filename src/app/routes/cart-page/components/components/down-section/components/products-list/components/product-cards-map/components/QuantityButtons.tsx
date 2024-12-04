import { IconButton, Stack, Typography } from '@mui/joy';
import { FaPlus as PlusIcon, FaMinus as MinusIcon } from 'react-icons/fa6';

interface Props {
    quantity: number;
}

export default function QuantityButtons({ quantity }: Props) {
    return (
        <Stack
            direction='row'
            alignItems='center'
            sx={{ width: { xs: '5rem' } }}
            justifyContent='space-between'
        >
            <IconButton variant='solid' color='primary' size='xs2'>
                <MinusIcon />
            </IconButton>
            <Typography
                fontWeight='600'
                lineHeight='1.2'
                sx={(theme) => ({
                    fontSize: { xs: '1rem' },
                    color: theme.palette.primary[900],
                })}
            >
                {quantity}
            </Typography>
            <IconButton variant='solid' color='primary' size='xs2'>
                <PlusIcon />
            </IconButton>
        </Stack>
    );
}

import { IconButton, Stack, Typography } from '@mui/joy';
import { FaPlus as PlusIcon, FaMinus as MinusIcon } from 'react-icons/fa6';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

function ActionButtons({ quantity }: { quantity: number }) {
    const { width } = useWindowDimensions();

    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            width={{ xs: '5rem', md: '3.047rem' }}
        >
            <IconButton
                variant='solid'
                size={width < 900 ? 'xs2' : 'xs3'}
                sx={(theme) => ({ bgcolor: theme.palette.primary[900] })}
            >
                <MinusIcon />
            </IconButton>
            <Typography
                fontSize={{ xs: '1rem', md: '0.563rem' }}
                fontWeight='600'
                lineHeight='1.2'
            >
                {quantity}
            </Typography>
            <IconButton
                variant='solid'
                size={width < 900 ? 'xs2' : 'xs3'}
                sx={(theme) => ({ bgcolor: theme.palette.primary[900] })}
            >
                <PlusIcon />
            </IconButton>
        </Stack>
    );
}

export default ActionButtons;

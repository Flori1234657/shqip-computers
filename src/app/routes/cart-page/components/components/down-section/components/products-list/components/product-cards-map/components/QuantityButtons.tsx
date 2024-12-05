import { IconButton, Stack, Typography } from '@mui/joy';
import { FaPlus as PlusIcon, FaMinus as MinusIcon } from 'react-icons/fa6';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

interface Props {
    quantity: number;
}

export default function QuantityButtons({ quantity }: Props) {
    const { width } = useWindowDimensions();

    return (
        <Stack
            direction='row'
            alignItems='center'
            sx={{ width: { xs: '5rem', md: '3.656rem' } }}
            justifyContent='space-between'
        >
            <IconButton
                variant='solid'
                color='primary'
                size={width < 900 ? 'xs2' : 'xs4'}
            >
                <MinusIcon />
            </IconButton>
            <Typography
                fontWeight='600'
                lineHeight='1.2'
                sx={(theme) => ({
                    fontSize: { xs: '1rem', md: '0.674rem' },
                    color: theme.palette.primary[900],
                })}
            >
                {quantity}
            </Typography>
            <IconButton
                variant='solid'
                color='primary'
                size={width < 900 ? 'xs2' : 'xs4'}
            >
                <PlusIcon />
            </IconButton>
        </Stack>
    );
}

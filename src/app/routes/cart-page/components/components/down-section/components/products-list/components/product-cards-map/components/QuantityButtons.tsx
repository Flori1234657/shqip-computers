import { IconButton, Stack, Typography } from '@mui/joy';
import { FaPlus as PlusIcon, FaMinus as MinusIcon } from 'react-icons/fa6';

interface Props {
    quantity: number;
}

export default function QuantityButtons({ quantity }: Props) {
    return (
        <Stack>
            <IconButton>
                <MinusIcon />
            </IconButton>
            <Typography>{quantity}</Typography>
            <IconButton>
                <PlusIcon />
            </IconButton>
        </Stack>
    );
}

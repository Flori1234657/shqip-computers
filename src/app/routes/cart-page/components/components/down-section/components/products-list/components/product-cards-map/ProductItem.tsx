import { Stack, Typography } from '@mui/joy';
import Image from 'src/components/Image';
import QuantityButtons from './components/QuantityButtons';
import DeleteButton from './components/DeleteButton';

interface Props {
    image: string;
    title: string;
    price: string;
    quantity: number;
}

export default function ProductItem({ image, title, price, quantity }: Props) {
    return (
        <>
            <Stack>
                <Image
                    ratio='1.57/1'
                    width={{ xs: '5rem' }}
                    src={image}
                    alt='Item'
                    objectFit='contain'
                />
                <Stack>
                    <Typography>{title}</Typography>
                    <Typography>{price}</Typography>
                </Stack>
            </Stack>
            <Stack>
                <QuantityButtons quantity={quantity} />
                <Typography>
                    ${(quantity * Number(price)).toFixed(2)}
                </Typography>
                <DeleteButton />
            </Stack>
        </>
    );
}

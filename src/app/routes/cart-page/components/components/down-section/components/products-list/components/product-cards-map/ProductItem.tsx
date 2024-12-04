import { Stack, Typography } from '@mui/joy';
import QuantityButtons from './components/QuantityButtons';
import DeleteButton from './components/DeleteButton';
import ProductDescription from './components/ProductDescription';

interface Props {
    image: string;
    title: string;
    price: string;
    quantity: number;
}

export default function ProductItem({ image, title, price, quantity }: Props) {
    return (
        <>
            <ProductDescription image={image} title={title} price={price} />
            <Stack direction='row' justifyContent='space-between'>
                <Stack
                    direction='row'
                    alignItems='center'
                    gap={{ xs: '0.5rem' }}
                >
                    <QuantityButtons quantity={quantity} />
                    <Typography
                        fontWeight='600'
                        lineHeight='1.2'
                        sx={(theme) => ({
                            fontSize: { xs: '1rem' },
                            color: theme.palette.primary[900],
                        })}
                    >
                        ${(quantity * Number(price)).toFixed(2)}
                    </Typography>
                </Stack>
                <DeleteButton />
            </Stack>
        </>
    );
}

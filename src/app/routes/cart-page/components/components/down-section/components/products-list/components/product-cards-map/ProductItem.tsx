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
            <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                sx={{ flexGrow: { md: '1' } }}
            >
                <Stack
                    direction='row'
                    alignItems='center'
                    justifyContent={{ md: 'space-between' }}
                    width={{ md: '8.868rem' }}
                    gap={{ xs: '0.5rem', md: 'unset' }}
                >
                    <QuantityButtons quantity={quantity} />
                    <Typography
                        fontWeight='600'
                        lineHeight='1.2'
                        sx={(theme) => ({
                            fontSize: { xs: '1rem', md: '0.674rem' },
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

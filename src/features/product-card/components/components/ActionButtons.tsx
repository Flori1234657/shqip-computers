import { useContext } from 'react';
import { Button, Stack } from '@mui/joy';
import {
    MdOutlineShoppingCart as CartIcon,
    MdArrowForward as ArrowIcon,
} from 'react-icons/md';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';
import { ProductCardComtext } from '../../context/useProductCardContext';

export default function ActionButtons() {
    const productCard = useContext(ProductCardComtext);
    const { width } = useWindowDimensions();

    return (
        <Stack direction='row' justifyContent='space-between'>
            <Button
                size={width < 900 ? 'sm2' : 'xs'}
                sx={{ fontSize: { md: '0.469rem' } }}
                startDecorator={<CartIcon />}
                disabled={!productCard || !productCard.name}
            >
                Add
            </Button>
            <Button
                size={width < 900 ? 'sm2' : 'xs'}
                sx={{ fontSize: { md: '0.469rem' } }}
                endDecorator={<ArrowIcon />}
                disabled={!productCard || !productCard.name}
            >
                View
            </Button>
        </Stack>
    );
}

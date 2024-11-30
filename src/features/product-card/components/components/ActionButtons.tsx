import { Button, Stack } from '@mui/joy';
import {
    MdOutlineShoppingCart as CartIcon,
    MdArrowForward as ArrowIcon,
} from 'react-icons/md';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function ActionButtons() {
    const { width } = useWindowDimensions();

    return (
        <Stack direction='row' justifyContent='space-between'>
            <Button
                size={width < 900 ? 'sm2' : 'xs'}
                sx={{ fontSize: { md: '0.469rem' } }}
                startDecorator={<CartIcon />}
            >
                Add
            </Button>
            <Button
                size={width < 900 ? 'sm2' : 'xs'}
                sx={{ fontSize: { md: '0.469rem' } }}
                endDecorator={<ArrowIcon />}
            >
                View
            </Button>
        </Stack>
    );
}

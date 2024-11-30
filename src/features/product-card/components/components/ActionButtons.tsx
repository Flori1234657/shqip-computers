import { Button, Stack } from '@mui/joy';
import {
    MdOutlineShoppingCart as CartIcon,
    MdArrowForward as ArrowIcon,
} from 'react-icons/md';

export default function ActionButtons() {
    return (
        <Stack direction='row' justifyContent='space-between'>
            <Button size='sm2' startDecorator={<CartIcon />}>
                Add
            </Button>
            <Button size='sm2' endDecorator={<ArrowIcon />}>
                View
            </Button>
        </Stack>
    );
}

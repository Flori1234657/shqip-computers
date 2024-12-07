import { Button } from '@mui/joy';
import { MdOutlineShoppingCart as CardIcon } from 'react-icons/md';

export default function AddToCardButton() {
    return <Button endDecorator={<CardIcon />}>Add To The Card</Button>;
}

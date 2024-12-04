import { IconButton } from '@mui/joy';
import { FaRegTrashCan as DeleteIcon } from 'react-icons/fa6';

export default function DeleteButton() {
    return (
        <IconButton variant='solid' color='danger' size='xs2'>
            <DeleteIcon />
        </IconButton>
    );
}

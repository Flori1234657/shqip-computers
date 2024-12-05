import { IconButton } from '@mui/joy';
import { FaRegTrashCan as DeleteIcon } from 'react-icons/fa6';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function DeleteButton() {
    const { width } = useWindowDimensions();

    return (
        <IconButton
            variant='solid'
            color='danger'
            size={width < 900 ? 'xs2' : 'xs4'}
        >
            <DeleteIcon />
        </IconButton>
    );
}

import { IconButton, Stack } from '@mui/joy';
import Cards from './components/category-cards/Cards';

import {
    FaArrowRight as RightArrIcon,
    FaArrowLeft as LeftArrIcon,
} from 'react-icons/fa6';

export default function CategoryCards() {
    return (
        <Stack>
            <IconButton>
                <LeftArrIcon />
            </IconButton>
            <Cards />
            <IconButton>
                <RightArrIcon />
            </IconButton>
        </Stack>
    );
}

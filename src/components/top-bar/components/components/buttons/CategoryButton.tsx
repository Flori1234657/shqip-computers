import { Button } from '@mui/joy';
import { MdOutlinePages as CategoryIcon } from 'react-icons/md';

function CategoryButton() {
    return (
        <Button size='xs' startDecorator={<CategoryIcon />}>
            Category
        </Button>
    );
}

export default CategoryButton;

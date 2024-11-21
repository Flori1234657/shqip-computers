import { Button } from '@mui/joy';
import { MdOutlinePages as CategoryIcon } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function CategoryButton() {
    const navigatie = useNavigate();

    return (
        <Button
            size='xs'
            startDecorator={<CategoryIcon />}
            onClick={() => navigatie('/categories')}
        >
            Category
        </Button>
    );
}

export default CategoryButton;

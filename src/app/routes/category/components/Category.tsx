import { IconButton, Link, List, ListItem, Stack, Typography } from '@mui/joy';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { MdArrowBackIos as ArrowIcon } from 'react-icons/md';
import Image from 'src/components/Image';
import availableCategories from '../availableCategories';

function Category() {
    const { categoryId } = useParams();
    const selectedCategory = availableCategories.filter(
        (category) => category.id === categoryId
    );

    return (
        <Stack>
            <Stack>
                <Stack>
                    <IconButton>
                        <ArrowIcon />
                    </IconButton>
                    <Typography>{selectedCategory[0].title}</Typography>
                </Stack>
                <Image
                    ratio='1.71/1'
                    width='18.75rem'
                    alt='category item'
                    src={selectedCategory[0].image}
                />
            </Stack>

            <List>
                {availableCategories[0].types.map((type) => (
                    <ListItem>
                        <Link
                            component={RouterLink}
                            to={`/shop/categories/${availableCategories[0].id}/${type.id}`}
                        >
                            {type.text}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}

export default Category;

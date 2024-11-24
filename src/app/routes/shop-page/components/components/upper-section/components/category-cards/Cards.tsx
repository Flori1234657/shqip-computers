import { List, ListItem, Stack, Typography } from '@mui/joy';
// import { useParams } from 'react-router-dom';
import availableCategories from 'src/app/routes/category/availableCategories';
import Image from 'src/components/Image';

export default function Cards() {
    // const { categoryId } = useParams();
    // const selectedCategory = availableCategories.filter(
    //     (category) => category.id === categoryId
    // ); // change styles for the selected category card

    return availableCategories.map((category) => (
        <Stack key={`shop-category-card${category.id}`}>
            <Image
                ratio='1.03/1'
                width={{ xs: '13.875rem' }}
                alt='category item'
                src={category.image}
            />
            <Stack>
                <Typography>{category.title}</Typography>
                {category.types.map((type) => (
                    <List key={`shop-category-card-type${type.id}`}>
                        <ListItem>{type.text}</ListItem>
                    </List>
                ))}
            </Stack>
        </Stack>
    ));
}

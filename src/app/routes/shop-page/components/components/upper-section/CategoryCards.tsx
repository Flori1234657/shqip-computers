import { Stack } from '@mui/joy';
import Cards from './components/category-cards/Cards';
import Carousel from 'src/components/carousel/Carousel';
import availableCategories from 'src/app/routes/category/availableCategories';

export default function CategoryCards() {
    return (
        <Stack
            direction='row'
            alignItems='center'
            position='relative'
            overflow='visible'
        >
            <Carousel
                elements={availableCategories.map((category) => (
                    <Cards
                        key={`shop-category-card${category.id}`}
                        category={category}
                    />
                ))}
                secondStackStyles={{
                    flexDirection: 'row',
                    p: { xs: '1.5rem 2rem', md: '0' },
                    pl: { sm: '3.75rem' },
                    gap: { xs: '6rem', sm: '2.5rem', md: '2.109rem' },
                    overflow: 'hidden',
                    position: 'unset !important',
                }}
            />
        </Stack>
    );
}

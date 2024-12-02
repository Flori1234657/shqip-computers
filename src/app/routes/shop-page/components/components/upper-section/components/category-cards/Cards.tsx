import { List, ListItem, Stack, Typography } from '@mui/joy';
// import { useParams } from 'react-router-dom';
import { availableCategory } from 'src/app/routes/category/availableCategories';
import Image from 'src/components/Image';

export default function Cards({ category }: { category: availableCategory }) {
    // const { categoryId } = useParams();
    // const selectedCategory = availableCategories.filter(
    //     (category) => category.id === categoryId
    // ); // change styles for the selected category card

    return (
        <Stack
            sx={(theme) => ({
                position: { xs: 'relative', md: 'unset' },

                bgcolor: theme.palette.neutral[800],
                borderRadius: { xs: '0.75rem', md: '0.5rem' },
                // toggle the box shadow basede on selected and the position on md size
                boxShadow: {
                    xs: theme.shadow.categoryCardSelected,
                    md: 'none',
                },
                '::before': {
                    display: { xs: 'none', md: 'unset' },
                    content: '""',
                    width: '6.509rem',
                    height: '7.383rem',
                    bgcolor: 'transparent',
                    boxShadow: theme.shadow.categoryCardSelected,
                    borderRadius: '0.5rem',

                    position: 'absolute',
                    zIndex: 1,
                },
            })}
        >
            <Image
                ratio='2.03/1'
                width={{ xs: '9.125rem', md: '6.504rem' }}
                objectFit='contain'
                alt='category item'
                src={category.image}
            />
            <Stack
                p={{
                    xs: '0.25rem 0.5rem 0.5rem 0.5rem',
                    md: '0.234rem 0.234rem 0.469rem 0.234rem',
                }}
                gap={{ md: '0.234rem' }}
                alignItems='center'
            >
                <Typography
                    fontFamily='Poppins'
                    fontWeight='500'
                    fontSize={{ xs: '1rem', md: '0.674rem' }}
                    lineHeight='1.5'
                    sx={(theme) => ({ color: theme.palette.primary[300] })}
                >
                    {category.title}
                </Typography>
                <List sx={{ alignItems: 'center' }}>
                    {' '}
                    {category.types.map((type, index) => {
                        if (index >= 3) return;

                        return (
                            <ListItem key={`shop-category-card-type${type.id}`}>
                                <Typography
                                    level='body-md'
                                    lineHeight='1.32'
                                    sx={{ color: 'white' }}
                                    fontSize={{ md: '0.563rem' }}
                                >
                                    {`${type.text}${index === 2 ? '...' : ''}`}
                                </Typography>
                            </ListItem>
                        );
                    })}
                </List>
            </Stack>
        </Stack>
    );
}

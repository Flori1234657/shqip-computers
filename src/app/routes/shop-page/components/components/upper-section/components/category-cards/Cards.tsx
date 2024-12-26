import { List, ListItem, Stack, Typography } from '@mui/joy';
import { motion } from 'motion/react';
import { useNavigate, useParams } from 'react-router-dom';
import { availableCategory } from 'src/app/routes/category/availableCategories';
import Image from 'src/components/Image';

export default function Cards({ category }: { category: availableCategory }) {
    const { categoryId } = useParams();
    const navigate = useNavigate();

    return (
        <Stack
            sx={(theme) => ({
                position: { xs: 'relative', md: 'unset' },

                bgcolor: theme.palette.neutral[800],
                borderRadius: { xs: '0.75rem', md: '0.5rem' },
                // toggle the box shadow basede on selected and the position on md size
                boxShadow: {
                    xs:
                        categoryId === category.title.toLowerCase()
                            ? theme.shadow.categoryCardSelected
                            : 'none',
                    md: 'none',
                },
                '::before': {
                    display: { xs: 'none', md: 'unset' },
                    content: '""',
                    width: '6.509rem',
                    height: '7.383rem',
                    bgcolor: 'transparent',
                    boxShadow:
                        categoryId === category.title.toLowerCase()
                            ? theme.shadow.categoryCardSelected
                            : 'none',
                    borderRadius: '0.5rem',

                    position: 'absolute',
                    zIndex: 1,
                },
            })}
            onClick={() =>
                navigate(`/shop/categories/${category.title.toLowerCase()}`)
            }
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
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

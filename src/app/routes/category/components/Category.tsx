import { IconButton, Link, List, ListItem, Stack, Typography } from '@mui/joy';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import { MdOutlineArrowBackIos as ArrowIcon } from 'react-icons/md';

import Image from 'src/components/Image';
import availableCategories from '../availableCategories';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

function Category() {
    const { width } = useWindowDimensions();

    const { categoryId } = useParams();
    const navigate = useNavigate();
    const selectedCategory = availableCategories.filter(
        (category) => category.id === categoryId
    );

    return (
        <Stack
            py={{ xs: '2.5rem', md: '1.875rem' }}
            px={{ sm: '2.5rem' }}
            gap={{ xs: '1.25rem', md: '1.625rem' }}
            width={{ xs: '17rem', sm: '31.5rem', md: '34.131rem' }}
            alignItems='center'
        >
            <Typography
                level='title-md'
                fontSize={{ xs: '1.688rem', md: '1.4rem' }}
                sx={{ color: 'white', pb: { xs: '1.75rem', md: '0.25rem' } }}
            >
                Type
            </Typography>
            <Stack
                sx={(theme) => ({
                    width: { xs: '100%' },
                    height: { xs: '8.25rem', md: '7.852rem' },
                    p: { xs: '1rem', md: '0.469rem' },

                    position: 'relative',
                    justifyContent: 'flex-end',
                    overflow: 'hidden',

                    bgcolor: theme.palette.primary[900],
                    borderRadius: { xs: '0.75rem' },
                })}
            >
                <Stack
                    direction='row'
                    alignItems='center'
                    gap={{ xs: '0.5rem', md: '0.469rem' }}
                >
                    <IconButton
                        variant='solid'
                        size={width < 900 ? 'sm' : 'xs2'}
                        sx={(theme) => ({
                            borderRadius: '50%',
                            bgcolor: theme.palette.primary[700],
                            zIndex: 1,
                        })}
                        onClick={() => navigate(-1)}
                    >
                        <ArrowIcon />
                    </IconButton>
                    <Typography
                        fontSize={{ xs: '1.2rem', md: '0.973rem' }}
                        fontWeight='600'
                        lineHeight='1.2'
                        sx={{ color: 'white', zIndex: 1 }}
                    >
                        {selectedCategory[0].title}
                    </Typography>
                </Stack>
                <Image
                    ratio='1.03/1'
                    width='18.75rem'
                    alt='category item'
                    src={selectedCategory[0].image}
                    otherStyles={{
                        position: 'absolute',
                        right: '-5rem',
                        top: '-5.5rem',
                        transform: 'scale(0.85)',
                    }}
                />
            </Stack>

            <List
                sx={{
                    alignSelf: 'flex-start',
                    gap: { xs: '0.5rem', md: '0.469rem' },
                }}
            >
                {selectedCategory[0].types.map((type) => (
                    <ListItem key={`category-type-text${type.id}`}>
                        <Link
                            component={RouterLink}
                            to={`/shop/categories/${selectedCategory[0].id}/${type.id}`}
                            sx={{
                                color: 'white',
                                fontSize: { xs: '1rem', md: '0.674rem' },
                                fontWeight: '500',
                                lineHeight: '1.2',
                            }}
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

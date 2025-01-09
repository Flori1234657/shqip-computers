import { Button, Grid, Stack, Typography } from '@mui/joy';
import Image from 'src/components/Image';
import availableCategories from '../availableCategories';

import { MdClose as CloseIcon } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';
import { motion } from 'motion/react';
import { heroTextVariants } from 'src/animations/home-page/hero-variants';

function FirstScreen() {
    const navigate = useNavigate();
    const { width } = useWindowDimensions();

    return (
        <Stack
            alignItems='center'
            py={{ xs: '2.5rem', md: '1.875rem' }}
            gap={{ xs: '2rem', md: '1.641rem' }}
        >
            <Typography
                level='title-md'
                fontSize={{ xs: '1.688rem', md: '1.4rem' }}
                sx={{ color: 'white', pb: { xs: '1rem', md: '0.234rem' } }}
                component={motion.h2}
                variants={heroTextVariants}
                initial='initialHeading'
                animate='animateHeading'
            >
                Category
            </Typography>

            <Grid
                container
                rowSpacing={{ xs: '1.25rem', md: '0.55rem' }}
                columnSpacing={{ xs: '1.25rem', md: '0.938rem' }}
                sx={{
                    m: { sm: 0 },
                    justifyContent: { sm: 'center' },
                    maxWidth: { md: '25.957rem' },
                }}
            >
                {availableCategories.map((category, index) => (
                    <Grid
                        xs={6}
                        md={4}
                        key={`category-card-${category.id}`}
                        sx={{ maxWidth: { sm: 'fit-content' } }}
                    >
                        <Stack
                            sx={(theme) => ({
                                width: { xs: '7.875rem', md: '8.028rem' },
                                height: { xs: '7.625rem', md: '7.852rem' },

                                position: 'relative',
                                justifyContent: 'flex-end',
                                overflow: 'hidden',

                                bgcolor: theme.palette.primary[900],
                                borderRadius: { xs: '0.75rem', md: '0.469rem' },
                                cursor: 'pointer',
                            })}
                            onClick={() =>
                                navigate(`/categories/${category.id}`)
                            }
                            component={motion.div}
                            initial={{ translateY: 50 }}
                            animate={{
                                translateY: 0,
                                transition: {
                                    type: 'spring',
                                    bounce: 0.5,
                                    damping: `5.${1 + index}`,
                                },
                            }}
                        >
                            <Typography
                                fontSize={{ xs: '1.2rem', md: '0.809rem' }}
                                fontWeight='500'
                                lineHeight='1.2'
                                sx={{
                                    color: 'white',
                                    p: { xs: '1rem', md: '0.469rem' },
                                    zIndex: 1,
                                }}
                            >
                                {category.title}
                            </Typography>
                            <Image
                                ratio='1.03/1'
                                width={{ xs: '7.875rem' }}
                                alt='category item'
                                src={category.image}
                                otherStyles={{
                                    position: 'absolute',
                                    ...category.imageStyles,
                                }}
                            />
                        </Stack>
                    </Grid>
                ))}
            </Grid>

            <Button
                size={width < 900 ? 'md' : 'md2'}
                color='neutral'
                startDecorator={<CloseIcon />}
                onClick={() => navigate(-1)}
                sx={(theme) => ({ bgcolor: theme.palette.neutral[800] })}
                component={motion.button}
                variants={heroTextVariants}
                initial='initialSubHeading'
                animate='animateSubHeading'
            >
                Close
            </Button>
        </Stack>
    );
}

export default FirstScreen;

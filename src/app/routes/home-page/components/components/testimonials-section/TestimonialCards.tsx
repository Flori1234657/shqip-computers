import { Stack, Typography } from '@mui/joy';
import { motion } from 'motion/react';
import PlaceholderImg from 'src/assets/images/review-placeholder.png';
import Image from 'src/components/Image';

function TestimonialCards() {
    const reviewsData = [
        {
            name: 'Ahmed',
            review: `“ At this store i can find everything
                    i want! Also the staff here is very kind. ”`,
            image: PlaceholderImg,
        },
        {
            name: 'Esma',
            review: `“ I have build an entire pc only from the 
                    products that i found here! It’s very easy 
                    you can find everything.”`,
            image: PlaceholderImg,
        },
        {
            name: 'Amr',
            review: `“ Very polite, very helpful staff, always 
                    when I have problems with my pc I find the 
                    parts here”`,
            image: PlaceholderImg,
        },
    ];

    return (
        <>
            {reviewsData.map((review, index) => (
                <Stack
                    key={`testimonial-card${index}`}
                    alignItems='center'
                    p={{ xs: '0.5rem', md: '0.703rem' }}
                    mt={index == 1 ? { md: '0.875rem' } : 'unset'}
                    gap={{ xs: '0.5rem', md: '0.703rem' }}
                    maxWidth={{ xs: '12.55rem', md: '12.625rem' }}
                    height={{ md: 'fit-content' }}
                    borderRadius={{ xs: '0.5rem', md: '0.469rem' }}
                    sx={(theme) => ({
                        backgroundImage: theme.palette.gradient.heroTxt,
                        boxShadow: '0 1.86px 2.78px 1.39px rgba(0,0,0,0.25)',
                        alignSelf: index == 1 ? 'flex-end' : 'unset',
                    })}
                    component={motion.div}
                    initial={{ scale: 0 }}
                    whileInView={{
                        scale: 1,
                        transition: { duration: 0.5 },
                    }}
                >
                    <Stack
                        alignItems='center'
                        gap={{ xs: '0.25rem', md: '0.469rem' }}
                    >
                        <Image
                            ratio='1/1'
                            src={review.image}
                            width={{ xs: '3.063rem', md: '2.578rem' }}
                            alt='person'
                            otherStyles={{
                                borderRadius: '50%',
                                border: '2px solid white',
                            }}
                        />
                        <Typography
                            fontFamily='Poppins'
                            fontWeight='500'
                            lineHeight='0.75'
                            fontSize={{ xs: 'sm', md: '0.674rem' }}
                            sx={(theme) => ({
                                color: theme.palette.neutral[800],
                            })}
                        >
                            {review.name}
                        </Typography>
                    </Stack>
                    <Typography
                        fontStyle='italic'
                        fontSize={{ xs: 'xs', md: '0.674rem' }}
                        sx={{ color: 'white', textAlign: 'center' }}
                    >
                        {review.review}
                    </Typography>
                </Stack>
            ))}
        </>
    );
}

export default TestimonialCards;

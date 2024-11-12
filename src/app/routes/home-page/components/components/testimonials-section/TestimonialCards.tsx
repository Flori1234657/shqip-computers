import { Stack, Typography } from '@mui/joy';
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
                    alignItems='center'
                    px='0.5rem'
                    py='0.5rem'
                    gap='0.5rem'
                    maxWidth='12.55rem'
                    borderRadius='0.5rem'
                    sx={(theme) => ({
                        backgroundImage: theme.palette.gradient.heroTxt,
                        boxShadow: '0 1.86px 2.78px 1.39px rgba(0,0,0,0.25)',
                        alignSelf: index == 1 ? 'flex-end' : 'unset',
                    })}
                >
                    <Stack alignItems='center' gap='0.25rem'>
                        <Image
                            ratio='1/1'
                            src={review.image}
                            width='3.063rem'
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
                            fontSize='sm'
                            sx={(theme) => ({
                                color: theme.palette.neutral[800],
                            })}
                        >
                            {review.name}
                        </Typography>
                    </Stack>
                    <Typography
                        fontStyle='italic'
                        fontSize='xs'
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

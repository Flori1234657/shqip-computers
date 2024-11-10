import { AspectRatio, Stack, Typography } from '@mui/joy';
import PlaceholderImg from 'src/assets/images/review-placeholder.png';

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
            {reviewsData.map((review) => (
                <Stack>
                    <Stack>
                        <AspectRatio ratio='1/1'>
                            <img src={review.image} alt='profile' />
                        </AspectRatio>
                        <Typography>{review.name}</Typography>
                    </Stack>
                    <Typography>{review.review}</Typography>
                </Stack>
            ))}
        </>
    );
}

export default TestimonialCards;

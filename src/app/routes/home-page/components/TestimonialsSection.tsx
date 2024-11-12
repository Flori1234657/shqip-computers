import { Stack, Typography } from '@mui/joy';
import TestimonialCards from './components/testimonials-section/TestimonialCards';
import Image from 'src/components/Image';
import Blob from 'src/assets/images/svg/home/testimonials-blob.svg';

function TestimonialsSection() {
    return (
        <Stack mt='10.75rem' gap='5rem'>
            <Typography
                textAlign='center'
                level='title-md'
                sx={(theme) => ({
                    textAlign: 'center',
                    color: theme.palette.primary[800],
                })}
            >
                What other’s say about us 💬
            </Typography>

            <Stack gap='2.5rem' position='relative'>
                <Image
                    ratio='0.98/1'
                    src={Blob}
                    width='16.188rem'
                    alt='blob'
                    objectFit='contain'
                    otherStyles={{
                        position: 'absolute',
                        top: '-3rem',
                        left: '-2.75rem',
                        zIndex: -1,
                    }}
                />
                <TestimonialCards />
            </Stack>
        </Stack>
    );
}

export default TestimonialsSection;

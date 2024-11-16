import { Stack, Typography } from '@mui/joy';
import TestimonialCards from './components/testimonials-section/TestimonialCards';
import Image from 'src/components/Image';
import Blob from 'src/assets/images/svg/home/testimonials-blob.svg';

function TestimonialsSection() {
    return (
        <Stack
            mt={{ xs: '10.75rem', sm: '15rem' }}
            gap={{ xs: '5rem', sm: '2.917rem' }}
        >
            <Typography
                textAlign='center'
                level='title-md'
                sx={(theme) => ({
                    maxWidth: { sm: '16rem' },
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
                        top: { xs: '-3rem', sm: '3rem' },
                        left: { xs: '-2.75rem', sm: '-6rem' },
                        zIndex: -1,
                    }}
                />
                <TestimonialCards />
            </Stack>
        </Stack>
    );
}

export default TestimonialsSection;

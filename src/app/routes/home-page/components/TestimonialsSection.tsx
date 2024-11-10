import { Stack, Typography } from '@mui/joy';
import TestimonialCards from './components/testimonials-section/TestimonialCards';

function TestimonialsSection() {
    return (
        <Stack>
            <Typography>What other’s say about us 💬</Typography>

            <Stack>
                <TestimonialCards />
            </Stack>
        </Stack>
    );
}

export default TestimonialsSection;

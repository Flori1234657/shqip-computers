import { Stack, Typography } from '@mui/joy';
import { motion } from 'motion/react';
import { heroTextVariants } from 'src/animations/home-page/hero-variants';

export default function Description() {
    return (
        <Stack>
            <Typography
                lineHeight='1.6'
                fontWeight='600'
                fontSize={{ xs: '1.2rem', md: '0.809rem' }}
                sx={(theme) => ({ color: theme.palette.primary[900] })}
                component={motion.h3}
                variants={heroTextVariants}
                initial='initialHeading'
                whileInView='animateHeading'
            >
                Description
            </Typography>
            <Typography
                lineHeight='1.4'
                fontSize={{ xs: '1rem', md: '0.675rem' }}
                sx={(theme) => ({ color: theme.palette.neutral[700] })}
                component={motion.p}
                variants={heroTextVariants}
                initial='initialSubHeading'
                whileInView='animateSubHeading'
            >
                Lorem ipsum dolor sit amet consectetur. Volutpat integer
                scelerisque risus proin nisl tempus sed vel. Nisl sed mi ut in
                consectetur donec ornare malesuada eget. Aliquam etiam integer
                suspendisse ultricies quam at. Tempus quis ultricies nec tellus
                faucibus rhoncus lacus hendrerit in. Velit faucibus natoque
                sollicitudin amet arcu felis nulla. Et adipiscing cras est ut
                adipiscing.
            </Typography>
        </Stack>
    );
}

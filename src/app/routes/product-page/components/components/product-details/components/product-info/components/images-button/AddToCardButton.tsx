import { Button } from '@mui/joy';
import { motion } from 'motion/react';
import { MdOutlineShoppingCart as CardIcon } from 'react-icons/md';
import { rotateButtonVariants } from 'src/animations/shared';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function AddToCardButton() {
    const { width } = useWindowDimensions();

    return (
        <Button
            size={width < 900 ? 'md' : 'md2'}
            sx={{ width: { md: '8.906rem' }, alignSelf: { md: 'flex-end' } }}
            endDecorator={<CardIcon />}
            component={motion.button}
            variants={rotateButtonVariants}
            initial='initial'
            animate='whileInView'
        >
            Add To The Card
        </Button>
    );
}

import { IconButton } from '@mui/joy';
import { motion } from 'motion/react';
import { MdOutlinePages as CategoryIcon } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function CategoryButton() {
    const navigate = useNavigate();

    return (
        <IconButton
            variant='solid'
            color='primary'
            size='lg'
            sx={{
                width: '3rem',
                height: '3rem',
                borderRadius: '100%',
                border: '0.25rem solid #051423',

                position: 'relative',
                top: '-0.938rem',
                left: '-0.75rem',
            }}
            onClick={() => navigate('/categories')}
            component={motion.button}
            initial={{ scale: 0, rotateZ: 360 }}
            animate={{
                scale: 1,
                rotateZ: 0,
                transition: {
                    delay: 0.25,
                    type: 'spring',
                    bounce: 0.5,
                    damping: 12,
                },
            }}
        >
            <CategoryIcon />
        </IconButton>
    );
}

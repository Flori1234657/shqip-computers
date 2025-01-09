import { IconButton, Stack } from '@mui/joy';
import { MdOutlinePages as CategoryIcon } from 'react-icons/md';
import NavLinks from './components/mobile-navigation/NavLinks';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export default function MobileVersion() {
    const navigate = useNavigate();

    return (
        <Stack
            sx={{
                width: '18.75rem',
                position: 'absolute',
                top: '80vh',
                left: 0,
                right: 0,
                ml: 'auto',
                mr: 'auto',
            }}
        >
            <nav>
                <Stack
                    direction='row'
                    px='0.75rem'
                    py='0.5rem'
                    justifyContent='space-between'
                    sx={(theme) => ({
                        justifyContent: 'space-between',
                        bgcolor: theme.palette.primary[900],
                        borderRadius: '1.5rem',

                        maxHeight: '4.063rem',
                    })}
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                >
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
                    <NavLinks />
                </Stack>
            </nav>
        </Stack>
    );
}

import { IconButton, Stack } from '@mui/joy';
import { MdOutlinePages as CategoryIcon } from 'react-icons/md';
import NavLinks from './components/mobile-navigation/NavLinks';
import { useNavigate } from 'react-router-dom';

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
                    >
                        <CategoryIcon />
                    </IconButton>
                    <NavLinks />
                </Stack>
            </nav>
        </Stack>
    );
}

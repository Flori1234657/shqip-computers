import { IconButton, Stack } from '@mui/joy';
import { MdOutlinePages as CategoryIcon } from 'react-icons/md';
import NavLinks from './components/mobile-navigation/NavLinks';

export default function MobileVersion() {
    return (
        <nav
            style={{
                width: '18.75rem',
                position: 'absolute',
                top: '85vh',
                left: '0.625rem',
            }}
        >
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
                >
                    <CategoryIcon />
                </IconButton>
                <NavLinks />
            </Stack>
        </nav>
    );
}

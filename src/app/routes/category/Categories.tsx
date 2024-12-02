import { Stack } from '@mui/joy';
import FirstScreen from './components/FirstScreen';
import { Outlet, useLocation } from 'react-router-dom';

function Categories() {
    const location = useLocation();

    return (
        <Stack
            position='fixed'
            alignItems='center'
            sx={(theme) => ({
                top: 0,
                right: 0,
                zIndex: 20,

                width: '100vw',
                minHeight: '100vh',
                px: { xs: '1.5rem' },

                backgroundImage: theme.palette.gradient.heroTxt,
            })}
        >
            {location.pathname === '/categories' ? <FirstScreen /> : ''}
            <Outlet />
        </Stack>
    );
}

export default Categories;

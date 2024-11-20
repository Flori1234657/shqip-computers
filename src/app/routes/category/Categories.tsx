import { Stack } from '@mui/joy';
import FirstScreen from './components/FirstScreen';
import { Outlet, useLocation } from 'react-router-dom';

function Categories() {
    const location = useLocation();

    return (
        <Stack
            position='fixed'
            sx={(theme) => ({
                top: 0,
                right: 0,
                zIndex: 2,

                width: '100vw',
                minHeight: '100vh',

                bgcolor: theme.palette.gradient.heroTxt,
            })}
        >
            {location.pathname === '/categories' ? <FirstScreen /> : ''}
            <Outlet />
        </Stack>
    );
}

export default Categories;

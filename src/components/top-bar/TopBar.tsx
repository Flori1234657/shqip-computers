import { Stack } from '@mui/joy';
import Navigation from '../navigation/Navigation';
import Buttons from './components/Buttons';
import Logo from './components/Logo';

export default function TopBar() {
    return (
        <header
            style={{ width: '100%', position: 'fixed', top: 0, zIndex: 100 }}
        >
            <Stack
                alignItems={{ md: 'center' }}
                direction={'row'}
                justifyContent='space-between'
                sx={{
                    px: { xs: '1.5rem', sm: '2.5rem', md: '2.344rem' },
                    py: { xs: '0.5rem', sm: '0.563rem', md: '0.234rem' },
                }}
                bgcolor='white'
            >
                <Logo />
                <Navigation />
                <Buttons />
            </Stack>
        </header>
    );
}

import { Stack } from '@mui/joy';
import Navigation from '../navigation/Navigation';
import Buttons from './components/Buttons';
import Logo from './components/Logo';

export default function TopBar() {
    return (
        <header>
            <Stack>
                <Logo />
                <Navigation />
                <Buttons />
            </Stack>
        </header>
    );
}

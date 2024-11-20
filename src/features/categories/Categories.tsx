import { Stack } from '@mui/joy';
import FirstScreen from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';

export default function Categories() {
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
            <FirstScreen />
            <SecondScreen />
        </Stack>
    );
}

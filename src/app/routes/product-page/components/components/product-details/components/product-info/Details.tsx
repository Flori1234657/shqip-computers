import { Stack } from '@mui/joy';
import Title from './components/details/Title';
import Status from './components/details/Status';
import Parameters from './components/details/Parameters';
import Price from './components/details/Price';

export default function Details() {
    return (
        <Stack gap={{ xs: '0.75rem' }}>
            <Title />
            <Stack gap={{ xs: '0.5rem' }}>
                <Status />
                <Parameters />
                <Price />
            </Stack>
        </Stack>
    );
}

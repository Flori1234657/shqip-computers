import { Stack } from '@mui/joy';
import ActionPanel from './components/ActionPanel';
import ProductCardsMap from './components/ProductCardsMap';

export default function RightContent() {
    return (
        <Stack gap={{ xs: '2rem', md: '0.703rem' }}>
            <ActionPanel />
            <ProductCardsMap />
        </Stack>
    );
}

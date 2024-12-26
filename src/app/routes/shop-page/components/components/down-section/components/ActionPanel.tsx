import { Stack } from '@mui/joy';
import SearchBar from './components/action-panel/SearchBar';
import ProductCount from './components/action-panel/ProductCount';
import SortFilterButtons from './components/action-panel/SortFilterButtons';
import { motion } from 'motion/react';

export default function ActionPanel() {
    return (
        <Stack
            direction='row'
            justifyContent='space-between'
            width='100%'
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
            <Stack
                gap={{ xs: '0.5rem', md: '0.703rem' }}
                direction={{ md: 'row' }}
                alignItems={{ md: 'center' }}
            >
                <SearchBar />
                <ProductCount />
            </Stack>
            <SortFilterButtons />
        </Stack>
    );
}

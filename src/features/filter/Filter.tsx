import { Stack } from '@mui/joy';
import UpperSection from './components/UpperSection';
import CategoriesOptions from './components/CategoryOptions';

export default function Filter() {
    return (
        <Stack position='fixed'>
            <UpperSection />
            <CategoriesOptions />
        </Stack>
    );
}

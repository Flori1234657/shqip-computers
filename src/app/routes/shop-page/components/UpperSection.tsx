import { Stack } from '@mui/joy';
import BreadCrumb from './components/upper-section/BreadCrumb';
import CategoryCards from './components/upper-section/CategoryCards';

export default function UpperSection() {
    return (
        <Stack gap={{ md: '1rem' }}>
            <BreadCrumb />
            <CategoryCards />
        </Stack>
    );
}

import { Input } from '@mui/joy';
import { BsSearch as SearchIcon } from 'react-icons/bs';

export default function SearchBar() {
    return (
        <Input
            size='sm'
            sx={{ maxWidth: { xs: '7.813rem' }, borderRadius: '0.75rem' }}
            placeholder='Search'
            endDecorator={<SearchIcon />}
        />
    );
}

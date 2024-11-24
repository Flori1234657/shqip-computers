import { Input } from '@mui/joy';
import { BsSearch as SearchIcon } from 'react-icons/bs';

export default function SearchBar() {
    return <Input placeholder='Search' endDecorator={<SearchIcon />} />;
}

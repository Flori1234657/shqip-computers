import { Input } from '@mui/joy';
import { BsSearch as SearchIcon } from 'react-icons/bs';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function SearchBar() {
    const { width } = useWindowDimensions();

    return (
        <Input
            size={width < 900 ? 'sm' : 'md2'}
            sx={{
                maxWidth: { xs: '7.813rem' },
                borderRadius: { xs: '0.75rem', md: '0.469rem' },
            }}
            placeholder='Search'
            endDecorator={<SearchIcon />}
        />
    );
}

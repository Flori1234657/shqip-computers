import { Input } from '@mui/joy';
import { BsSearch as SearchIcon } from 'react-icons/bs';
import useShopStore from 'src/app/routes/shop-page/store/shop';
import { useDebounce } from 'src/hooks/useDebounce';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function SearchBar() {
    const { width } = useWindowDimensions();

    const { setSearchValue: setSearchText } = useShopStore();
    const { setSearchValue } = useDebounce({
        action: (debouncedValue: string) =>
            setSearchText(debouncedValue.length < 2 ? null : debouncedValue),
        delay: 1000,
    });

    return (
        <Input
            size={width < 900 ? 'sm' : 'md2'}
            sx={{
                maxWidth: { xs: '7.813rem' },
                borderRadius: { xs: '0.75rem', md: '0.469rem' },
            }}
            placeholder='Search'
            endDecorator={<SearchIcon />}
            onChange={(event) => {
                if (event.currentTarget.value.length === 0) return;

                setSearchValue(event.currentTarget.value);
            }}
        />
    );
}

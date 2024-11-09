import {
    AspectRatio,
    Autocomplete,
    AutocompleteOption,
    FormControl,
    Typography,
} from '@mui/joy';
import { BsSearch as SearchIcon } from 'react-icons/bs';
import PlaceholderImg from 'src/assets/images/placeholder.png';

export default function SearchBar() {
    /**
         🌐 Build an api that will query only 
         the data with the names that match 
         the search (not all the product's).
     */
    const placeholderProducts = [
        {
            name: 'Fujitsu Esprimo p900',
            image: PlaceholderImg,
        },
        {
            name: 'Fujitsu Esprimo p340',
            image: PlaceholderImg,
        },
        {
            name: 'Fujitsu Esprimo p750',
            image: PlaceholderImg,
        },
        {
            name: 'Fujitsu Esprimo p690',
            image: PlaceholderImg,
        },
    ];

    return (
        <FormControl id='home-search-bar' error={false}>
            <Autocomplete
                placeholder='Search'
                slotProps={{
                    input: {
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    },
                }}
                sx={{ width: 300 }}
                options={placeholderProducts}
                autoHighlight
                getOptionLabel={(option) => option.name}
                renderOption={(props, option) => (
                    <AutocompleteOption {...props}>
                        <AspectRatio ratio='1.55/1'>
                            <img src={option.image} alt='product' />
                        </AspectRatio>
                        <Typography>{option.name}</Typography>
                    </AutocompleteOption>
                )}
                endDecorator={<SearchIcon />}
            />
            {/* <FormHelperText>Nothing matches your search!</FormHelperText> */}
        </FormControl>
    );
}

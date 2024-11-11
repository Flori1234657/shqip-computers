import {
    Autocomplete,
    AutocompleteOption,
    FormControl,
    Typography,
} from '@mui/joy';
import { BsSearch as SearchIcon } from 'react-icons/bs';
import PlaceholderImg from 'src/assets/images/placeholder.png';
import Image from 'src/components/Image';

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
                    popupIndicator: {
                        style: {
                            display: 'none',
                        },
                    },
                    endDecorator: {
                        style: {
                            fontSize: '1.25rem',
                        },
                    },
                    listbox: {
                        style: {
                            borderRadius: '1rem',
                        },
                    },
                }}
                size='lg'
                sx={(theme) => ({
                    width: '100%',
                    minHeight: '2.5rem',
                    backgroundColor: 'transparent',
                    borderRadius: '2rem',
                    border: `2px solid ${theme.palette.primary[500]}`,
                })}
                options={placeholderProducts}
                autoHighlight
                getOptionLabel={(option) => option.name}
                renderOption={(props, option) => (
                    <AutocompleteOption {...props}>
                        <Image
                            ratio='1.55/1'
                            src={option.image}
                            alt='product'
                            width='3rem'
                        />
                        <Typography>{option.name}</Typography>
                    </AutocompleteOption>
                )}
                endDecorator={<SearchIcon />}
            />
        </FormControl>
    );
}

import {
    Autocomplete,
    AutocompleteOption,
    FormControl,
    Typography,
} from '@mui/joy';
import { BsSearch as SearchIcon } from 'react-icons/bs';
import PlaceholderImg from 'src/assets/images/placeholder.png';
import Image from 'src/components/Image';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function SearchBar() {
    const { width } = useWindowDimensions();

    /**
         🌐 Build an api that will query only 
         the data with the names that match 
         the search (not all the product's).
     */
    const placeholderProducts = [
        {
            id: '12d2c21233r24rfvs',
            name: 'Fujitsu Esprimo p900',
            image: PlaceholderImg,
        },
        {
            id: '16g*81x89^!!',
            name: 'Fujitsu Esprimo p340',
            image: PlaceholderImg,
        },
        {
            id: '^!76xybg8191',
            name: 'Fujitsu Esprimo p750',
            image: PlaceholderImg,
        },
        {
            id: '1901j0(!*(nz ',
            name: 'Fujitsu Esprimo p690',
            image: PlaceholderImg,
        },
    ];

    return (
        <FormControl id='home-search-bar' error={false}>
            <Autocomplete
                noOptionsText='Nothing matches your search ❌'
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
                    listbox: {
                        style: {
                            borderRadius: '1em',
                            padding: '0.5em 0',
                        },
                    },
                    clearIndicator: {
                        style: { display: 'none' },
                    },
                    noOptions: {
                        style: {
                            padding: '0.5rem',
                            alignSelf: 'center',
                        },
                    },
                }}
                size={width < 900 ? 'lg' : 'xs'}
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
                    <AutocompleteOption
                        {...props}
                        key={`search-items${option.id}`}
                        sx={{
                            p: { xs: '0.25rem', md: '0.234rem' },
                            gap: { xs: '0.5rem', md: '0.469rem' },
                        }}
                    >
                        <Image
                            ratio='1.55/1'
                            src={option.image}
                            alt='product'
                            width={{ xs: '3rem', md: '2.608rem' }}
                        />
                        <Typography fontSize={{ xs: '1rem', md: '0.674rem' }}>
                            {option.name}
                        </Typography>
                    </AutocompleteOption>
                )}
                endDecorator={<SearchIcon />}
            />
        </FormControl>
    );
}

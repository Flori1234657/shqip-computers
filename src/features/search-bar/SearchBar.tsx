import {
    Autocomplete,
    AutocompleteOption,
    FormControl,
    Stack,
    Typography,
} from '@mui/joy';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { BsSearch as SearchIcon } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Image from 'src/components/Image';
import Loader from 'src/components/loader/Loader';
import { useDebounce } from 'src/hooks/useDebounce';
import useSearch from 'src/hooks/useSearch';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function SearchBar() {
    const { width } = useWindowDimensions();
    const navigate = useNavigate();

    const controller = new AbortController();
    const { search, results, isLoading, setIsLoading } = useSearch(
        controller.signal
    );
    const { setSearchValue } = useDebounce({
        action: (debouncedValue: string) => search(debouncedValue),
        delay: 1500,
    });

    useEffect(() => {
        return () => controller.abort();
    });

    return (
        <FormControl
            id='home-search-bar'
            error={false}
            component={motion.div}
            initial={{ width: 0, opacity: 0 }}
            animate={{
                width: '100%',
                opacity: 1,
                transition: { delay: 0.75, duration: 0.5 },
            }}
        >
            <Autocomplete
                loading={isLoading}
                loadingText={
                    <Stack py={{ xs: '1rem' }}>
                        <Loader />
                    </Stack>
                }
                onInputChange={(__, newValue) => {
                    if (!isLoading) setIsLoading(true);
                    if (!newValue) setIsLoading(false);
                    setSearchValue(newValue);
                }}
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
                    loading: {
                        style: {
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
                options={results ? results : []}
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
                        onClick={() =>
                            navigate(`/product/${option.documentId}`)
                        }
                    >
                        <Image
                            ratio='1.55/1'
                            src={`${import.meta.env.VITE_REACT_APP_BACKEND}${option.images[0].url}`}
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

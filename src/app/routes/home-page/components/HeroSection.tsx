import { Stack, Typography } from '@mui/joy';
import SearchBar from 'src/features/search-bar/SearchBar';

export default function HeroSection() {
    return (
        <Stack>
            <Stack>
                <Typography>Welcome to your online pc storage!</Typography>
                <Typography>
                    Find everything you want, from desktop’s to small electronic
                    parts like transistor’s.
                </Typography>
            </Stack>
            <SearchBar />
        </Stack>
    );
}

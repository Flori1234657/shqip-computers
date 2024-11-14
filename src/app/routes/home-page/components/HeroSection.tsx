import { Stack, Typography } from '@mui/joy';
import SearchBar from 'src/features/search-bar/SearchBar';

import Image from 'src/components/Image';
import RightBlob from 'src/assets/images/svg/home/hero-blob-1.svg';
import LeftBlob from 'src/assets/images/svg/home/hero-blob-2.svg';

export default function HeroSection() {
    return (
        <Stack mt='7.5rem' gap='2rem'>
            <Image
                ratio='1.01/1'
                src={RightBlob}
                width='5.563rem'
                alt='blob'
                otherStyles={{
                    position: 'absolute',
                    top: { xs: '3rem', sm: '3.125rem' },
                    left: { xs: 0, sm: '2.083rem' },
                    zIndex: '-1',
                }}
            />

            <Stack gap='1rem'>
                <Typography
                    level='title-lg'
                    sx={(theme) => ({
                        backgroundImage: theme.palette.gradient.heroTxt,
                        color: 'transparent',
                        backgroundClip: 'text',

                        textAlign: 'center',
                    })}
                >
                    Welcome to your online pc storage!
                </Typography>
                <Typography
                    fontSize='md'
                    lineHeight='1.4'
                    fontWeight='500'
                    sx={(theme) => ({
                        color: theme.palette.neutral[700],
                        textAlign: 'center',
                    })}
                >
                    Find everything you want, from desktop’s to small electronic
                    parts like transistor’s.
                </Typography>
            </Stack>
            <SearchBar />
            <Image
                ratio='1.11/1'
                src={LeftBlob}
                width='5.875rem'
                alt='blob'
                otherStyles={{
                    position: 'absolute',
                    top: { xs: '21.5rem', sm: '17.5rem' },
                    right: { xs: '0.313rem', sm: '0.417rem' },
                    zIndex: '-1',
                }}
            />
        </Stack>
    );
}

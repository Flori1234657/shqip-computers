import { Stack, Typography } from '@mui/joy';
import SearchBar from 'src/features/search-bar/SearchBar';

import Image from 'src/components/Image';
import RightBlob from 'src/assets/images/svg/home/hero-blob-1.svg';
import LeftBlob from 'src/assets/images/svg/home/hero-blob-2.svg';

export default function HeroSection() {
    return (
        <Stack mt='7.5rem' mx='1.5rem' gap='2rem'>
            <Image
                ratio='1.01/1'
                src={RightBlob}
                width='5.563rem'
                alt='blob'
                otherStyles={{
                    position: 'absolute',
                    top: '3rem',
                    left: 0,
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
                    top: '21.5rem',
                    right: '0.313rem',
                    zIndex: '-1',
                }}
            />
        </Stack>
    );
}

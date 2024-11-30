import { Stack } from '@mui/joy';
import Image from 'src/components/Image';
import PlaceholderImg from 'src/assets/images/placeholder.png';
import Content from './components/Content';
import { useLocation } from 'react-router-dom';

export default function ProductCard() {
    const { pathname } = useLocation();

    return (
        <Stack
            sx={(theme) => ({
                maxWidth: { xs: '11.438rem', md: '7.998rem' },
                borderRadius: { xs: '0.75rem' },
                bgcolor:
                    pathname === '/' ? theme.palette.neutral[800] : 'white',
                boxShadow:
                    pathname !== '/'
                        ? '0 0.25rem 0.25rem 0.25rem rgba(0,0,0,0.25)'
                        : 'unset',
            })}
        >
            <Image
                src={PlaceholderImg}
                ratio='1.53/1'
                width='11.438rem'
                objectFit='contain'
                alt='Product '
            />
            <Content />
        </Stack>
    );
}

import { IconButton, Stack } from '@mui/joy';
import { lazy, Suspense } from 'react';
import { MdOutlineShoppingCart as CartIcon } from 'react-icons/md';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

const CategoryButton = lazy(
    () => import('./components/buttons/CategoryButton')
);

export default function Buttons() {
    const { width } = useWindowDimensions();

    return (
        <Stack direction={{ md: 'row' }} gap={{ md: '0.938rem' }}>
            <IconButton
                variant='solid'
                size='xs'
                color='primary'
                sx={(theme) => ({ bgcolor: theme.palette.primary[900] })}
            >
                <CartIcon />
            </IconButton>

            {width < 899 ? (
                ''
            ) : (
                <Suspense fallback=''>
                    <CategoryButton />
                </Suspense>
            )}
        </Stack>
    );
}

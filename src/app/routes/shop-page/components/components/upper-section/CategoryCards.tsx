import { IconButton, Stack } from '@mui/joy';
import Cards from './components/category-cards/Cards';
import { useState } from 'react';

import {
    FaArrowRight as RightArrIcon,
    FaArrowLeft as LeftArrIcon,
} from 'react-icons/fa6';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function CategoryCards() {
    const [moveCards, setMoveCards] = useState(0);
    const { width } = useWindowDimensions();

    return (
        <Stack
            direction='row'
            alignItems='center'
            position='relative'
            overflow='scroll'
        >
            <IconButton
                size={width < 900 ? 'sm' : 'xs'}
                variant='solid'
                sx={(theme) => ({
                    position: 'sticky',
                    left: 0,
                    zIndex: 1,
                    bgcolor: theme.palette.primary[900],
                    maxHeight: 'fit-content',
                })}
                onClick={() =>
                    setMoveCards((prev) =>
                        prev === -75.625 ? 0 : prev + -15.125
                    )
                }
            >
                <LeftArrIcon />
            </IconButton>
            <Stack
                direction='row'
                p={{ xs: '1.5rem 2rem', md: '2rem 2.344rem' }}
                gap={{ xs: '6rem', sm: '2.5rem', md: '2.109rem' }}
                sx={{
                    transform: `translateX(${moveCards}rem)`,
                    overflowY: { md: 'visible' },
                }}
            >
                <Cards />
            </Stack>
            <IconButton
                size={width < 900 ? 'sm' : 'xs'}
                variant='solid'
                sx={(theme) => ({
                    position: 'sticky',
                    right: 0,
                    bgcolor: theme.palette.primary[900],
                    maxHeight: 'fit-content',
                })}
                onClick={() =>
                    setMoveCards((prev) => (prev === 0 ? 0 : prev + 15.125))
                }
            >
                <RightArrIcon />
            </IconButton>
        </Stack>
    );
}

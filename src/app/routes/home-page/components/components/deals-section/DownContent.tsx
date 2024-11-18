import { IconButton, Stack } from '@mui/joy';
import {
    FaArrowRight as RightArrIcon,
    FaArrowLeft as LeftArrIcon,
} from 'react-icons/fa6';
import CardImages from './components/down-content/CardImages';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

function DownContent() {
    const { width } = useWindowDimensions();

    return (
        <Stack
            width={{ sm: '100%' }}
            direction='row'
            alignItems='center'
            justifyContent='space-between'
        >
            <IconButton
                variant='solid'
                color='primary'
                size={width < 900 ? 'sm' : 'xs'}
                sx={(theme) => ({
                    backgroundColor: theme.palette.primary[900],
                })}
            >
                <LeftArrIcon />
            </IconButton>
            <Stack
                direction='row'
                alignItems='center'
                justifyContent='center'
                gap={{ xs: '1.5rem', md: '1.641rem' }}
                sx={{
                    maxWidth: { xs: '10rem', sm: '20rem', md: '100%' },
                    height: { xs: '6.503rem', md: 'auto' },
                    pl: { sm: '13rem', md: 0 },
                    overflowX: 'scroll',
                }}
            >
                <CardImages />
            </Stack>
            <IconButton
                variant='solid'
                color='primary'
                size={width < 900 ? 'sm' : 'xs'}
                sx={(theme) => ({
                    backgroundColor: theme.palette.primary[900],
                })}
            >
                <RightArrIcon />
            </IconButton>
        </Stack>
    );
}

export default DownContent;

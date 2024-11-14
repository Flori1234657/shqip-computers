import { IconButton, Stack } from '@mui/joy';
import {
    FaArrowRight as RightArrIcon,
    FaArrowLeft as LeftArrIcon,
} from 'react-icons/fa6';
import CardImages from './components/down-content/CardImages';

function DownContent() {
    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
        >
            <IconButton
                variant='solid'
                color='primary'
                size='sm'
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
                gap='1.5rem'
                sx={{
                    maxWidth: { xs: '10rem', sm: '20rem' },
                    height: '6.503rem',
                    pl: { sm: '13rem' },
                    overflowX: 'scroll',
                }}
            >
                <CardImages />
            </Stack>
            <IconButton
                variant='solid'
                color='primary'
                size='sm'
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

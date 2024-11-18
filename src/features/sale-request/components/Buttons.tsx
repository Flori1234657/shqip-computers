import { Button, Stack } from '@mui/joy';

import { TbSend as SendIcon } from 'react-icons/tb';
import { IoMdClose as ClearIcon } from 'react-icons/io';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

function Buttons() {
    const { width } = useWindowDimensions();

    return (
        <Stack
            mt={{ xs: '0.25rem', md: 'unset' }}
            gap={{ xs: '0.5rem', md: '0.469rem' }}
            direction={{ sm: 'row' }}
        >
            <Button
                size={width > 899 ? 'md2' : 'md'}
                variant='outlined'
                color='danger'
                endDecorator={<ClearIcon />}
            >
                Clear
            </Button>
            <Button
                size={width > 899 ? 'md2' : 'md'}
                type='submit'
                endDecorator={<SendIcon />}
            >
                Send To Us
            </Button>
        </Stack>
    );
}

export default Buttons;

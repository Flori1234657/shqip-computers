import { Button, Stack } from '@mui/joy';
import { TbSend as SendIcon } from 'react-icons/tb';
import { IoMdClose as ClearIcon } from 'react-icons/io';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function Buttons({ isLoading }: { isLoading: boolean }) {
    const { width } = useWindowDimensions();

    return (
        <Stack
            gap={{ xs: '0.75rem', md: '0.469rem' }}
            direction={{ md: 'row' }}
        >
            <Button
                size={width < 900 ? 'md' : 'md2'}
                variant='outlined'
                color='danger'
                endDecorator={<ClearIcon />}
                disabled={isLoading}
            >
                Clear
            </Button>
            <Button
                size={width < 900 ? 'md' : 'md2'}
                type='submit'
                endDecorator={<SendIcon />}
                loading={isLoading}
            >
                Send To Us
            </Button>
        </Stack>
    );
}

import { Button, Stack } from '@mui/joy';
import { TbSend as SendIcon } from 'react-icons/tb';
import { IoMdClose as ClearIcon } from 'react-icons/io';

export default function Buttons() {
    return (
        <Stack mt='0.25rem' gap='0.5rem'>
            <Button
                variant='outlined'
                color='danger'
                endDecorator={<ClearIcon />}
            >
                Clear
            </Button>
            <Button type='submit' endDecorator={<SendIcon />}>
                Send To Us
            </Button>
        </Stack>
    );
}

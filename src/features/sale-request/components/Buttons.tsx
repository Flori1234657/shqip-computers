import { Button, Stack } from '@mui/joy';

import { TbSend as SendIcon } from 'react-icons/tb';
import { IoMdClose as ClearIcon } from 'react-icons/io';

function Buttons() {
    return (
        <Stack mt='0.25rem' gap='0.5rem' direction={{ sm: 'row' }}>
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

export default Buttons;

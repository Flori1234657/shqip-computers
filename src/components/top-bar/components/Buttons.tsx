import { IconButton, Stack } from '@mui/joy';
import { MdOutlineShoppingCart as CartIcon } from 'react-icons/md';

export default function Buttons() {
    return (
        <Stack>
            <IconButton
                variant='solid'
                size='sm'
                color='primary'
                sx={(theme) => ({ bgcolor: theme.palette.primary[900] })}
            >
                <CartIcon />
            </IconButton>

            {/** 🖥️ Only visible in pc, for mobile on the navigation bar
        
        <Button>Category</Button>
        
        */}
        </Stack>
    );
}

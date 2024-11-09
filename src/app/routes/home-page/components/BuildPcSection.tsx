import { Button, Stack, Typography } from '@mui/joy';
import { FaArrowRight as RightArrIcon } from 'react-icons/fa6';

function BuildPcSection() {
    return (
        <Stack>
            <Typography>Build your own pc 🛠️</Typography>
            <Typography>
                By simply selecting all the necessary components in our site you
                can build your own pc from scratch! We have made this process
                easy by providing all the necessary components in our store, so
                that you do not need to search for them everywhere!
            </Typography>
            <Button endDecorator={<RightArrIcon />}>Go To The Store</Button>
        </Stack>
    );
}

export default BuildPcSection;

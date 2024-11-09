import { Stack, Typography } from '@mui/joy';
import SaleRequest from 'src/features/sale-request/SaleRequest';

function MakeProfitSection() {
    return (
        <Stack>
            <Typography>Make profit from your pc 💸</Typography>
            <Typography>
                Do you have an old pc that you don’t use anymore? We can buy it!
                Fill the form with the necessary information and wait for us to
                contact you.
            </Typography>
            <SaleRequest />
        </Stack>
    );
}

export default MakeProfitSection;

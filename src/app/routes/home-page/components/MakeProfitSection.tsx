import { Stack, Typography } from '@mui/joy';
import Image from 'src/components/Image';
import SaleRequest from 'src/features/sale-request/SaleRequest';

import Blob from 'src/assets/images/svg/home/make-profit-blob.svg';

function MakeProfitSection() {
    return (
        <Stack
            alignItems='center'
            gap={{ xs: '2rem', sm: '2.917rem' }}
            sx={{
                position: 'relative',
                overflow: 'visible',
                mt: { xs: '10.75rem', sm: '15rem' },
            }}
        >
            <Image
                ratio='1.06/1'
                src={Blob}
                width='24.313rem'
                alt='blob'
                objectFit='contain'
                otherStyles={{
                    position: 'absolute',
                    top: { xs: '6.125rem', sm: '4rem' },
                    left: { sm: '5rem' },
                    zIndex: -1,
                }}
            />

            <Stack gap={{ xs: '2rem', sm: '1.042rem' }} alignItems='center'>
                <Typography
                    textAlign='center'
                    level='title-md'
                    sx={(theme) => ({
                        maxWidth: '15rem',
                        textAlign: 'center',
                        color: theme.palette.primary[800],
                    })}
                >
                    Make profit from your pc 💸
                </Typography>
                <Typography
                    textAlign='center'
                    level='body-lg'
                    sx={(theme) => ({
                        textAlign: 'center',
                        color: theme.palette.neutral[800],
                    })}
                >
                    Do you have an old pc that you don’t use anymore? <br /> We
                    can buy it! Fill the form with the necessary information and
                    wait for us to contact you.
                </Typography>
            </Stack>
            <SaleRequest />
        </Stack>
    );
}

export default MakeProfitSection;

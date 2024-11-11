import { Button, Stack, Typography } from '@mui/joy';
import { FaArrowRight as RightArrIcon } from 'react-icons/fa6';

import Image from 'src/components/Image';
import Blob from 'src/assets/images/svg/home/build-pc-blob.svg';

function BuildPcSection() {
    return (
        <Stack
            mt='11rem'
            alignItems='center'
            sx={{ position: 'relative', overflow: 'visible' }}
        >
            <Image
                ratio='0.81/1'
                src={Blob}
                width='16.938rem'
                alt='blob'
                objectFit='contain'
                otherStyles={{
                    position: 'absolute',
                    top: '4.125rem',
                    zIndex: -1,
                    left: '-5.4rem',
                }}
            />

            <Typography
                textAlign='center'
                level='title-md'
                sx={(theme) => ({
                    maxWidth: '15rem',
                    textAlign: 'center',
                    color: theme.palette.primary[800],

                    mb: '2rem',
                })}
            >
                Build your own pc 🛠️
            </Typography>
            <Typography
                textAlign='center'
                level='body-lg'
                sx={(theme) => ({
                    textAlign: 'center',
                    color: theme.palette.neutral[800],

                    mb: '1rem',
                })}
            >
                By simply selecting all the necessary components in our site you
                can build your own pc from scratch! <br />
                <br /> We have made this process easy by providing all the
                necessary components in our store, so that you do not need to
                search for them everywhere!
            </Typography>
            <Button size='md' fullWidth endDecorator={<RightArrIcon />}>
                Go To The Store
            </Button>
        </Stack>
    );
}

export default BuildPcSection;

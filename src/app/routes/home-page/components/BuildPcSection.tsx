import { Button, Stack, Typography } from '@mui/joy';
import { FaArrowRight as RightArrIcon } from 'react-icons/fa6';

import Image from 'src/components/Image';
import Blob from 'src/assets/images/svg/home/build-pc-blob.svg';

function BuildPcSection() {
    return (
        <Stack
            alignItems='center'
            sx={{
                mt: { xs: '11rem', sm: '15rem' },
                gap: { xs: '2rem', sm: '3.75rem' },

                position: { xs: 'relative' },
            }}
        >
            <Typography
                textAlign='center'
                level='title-md'
                sx={(theme) => ({
                    maxWidth: { xs: '15rem', sm: 'unset' },
                    textAlign: 'center',
                    color: theme.palette.primary[800],
                })}
            >
                Build your own pc 🛠️
            </Typography>
            <Stack
                sx={{
                    flexDirection: { sm: 'row' },
                    justifyContent: { sm: 'flex-end' },
                }}
            >
                <Image
                    ratio='0.81/1'
                    src={Blob}
                    width='16.938rem'
                    alt='blob'
                    objectFit='contain'
                    otherStyles={{
                        position: { xs: 'absolute' },
                        top: { xs: '4.125rem', sm: '4rem' },
                        zIndex: -1,
                        left: { xs: '-9.1rem', sm: '-5rem' },
                    }}
                />

                <Stack sx={{ width: { sm: '50%' }, gap: { xs: '1rem' } }}>
                    <Typography
                        level='body-lg'
                        sx={(theme) => ({
                            textAlign: { xs: 'center', sm: 'left' },
                            color: theme.palette.neutral[800],
                        })}
                    >
                        By simply selecting all the necessary components in our
                        site you can build your own pc from scratch! <br />
                        <br /> We have made this process easy by providing all
                        the necessary components in our store, so that you do
                        not need to search for them everywhere!
                    </Typography>
                    <Button size='md' fullWidth endDecorator={<RightArrIcon />}>
                        Go To The Store
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default BuildPcSection;

import { Stack, Typography } from '@mui/joy';
import Image from 'src/components/Image';
import theme from 'src/config/theme';

interface Props {
    image: string;
    name: string;
    price: string;
}

function ImageNamePriceInfo(props: Props) {
    return (
        <Stack
            direction='row'
            alignItems='center'
            gap={{ xs: '0.5rem' }}
            py={{ xs: '0.5rem' }}
        >
            <Image
                ratio='1.57/1'
                src={props.image}
                width={{ xs: '5rem' }}
                alt='product'
                objectFit='contain'
                otherStyles={{
                    bgcolor: theme.palette.neutral[800],
                    borderRadius: { xs: '0.5rem' },
                }}
            />
            <Stack gap={{ xs: '0.25rem' }}>
                <Typography
                    level='body-lg'
                    lineHeight='1.2'
                    sx={{ color: theme.palette.text.primary }}
                >
                    {props.name.length > 18
                        ? `${props.name.slice(0, 16)}...`
                        : props.name}
                </Typography>
                <Typography level='title-sm' fontSize={{ xs: '1rem' }}>
                    ${props.price}
                </Typography>
            </Stack>
        </Stack>
    );
}

export default ImageNamePriceInfo;

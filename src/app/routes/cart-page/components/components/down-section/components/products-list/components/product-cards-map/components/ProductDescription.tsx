import { Stack, Typography } from '@mui/joy';
import Image from 'src/components/Image';
import theme from 'src/config/theme';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

interface Props {
    image: string;
    title: string;
    price: number;
}

export default function ProductDescription({ image, title, price }: Props) {
    const { width } = useWindowDimensions();

    return (
        <Stack
            direction='row'
            alignItems='center'
            sx={{ gap: { xs: '0.5rem' }, width: { md: '10.401rem' } }}
        >
            <Image
                ratio='1.57/1'
                width={{ xs: '5rem', md: '3.047rem' }}
                src={image}
                alt='Item'
                objectFit='contain'
                otherStyles={{
                    bgcolor: theme.palette.primary[900],
                    borderRadius: { xs: '0.5rem', md: '0.352rem' },
                }}
            />
            <Stack sx={{ gap: { xs: '0.25rem' } }}>
                <Typography
                    lineHeight='1.2'
                    sx={(theme) => ({
                        fontSize: { xs: '1rem', md: '0.674rem' },
                        fontWeight: { xs: '500' },
                        color: theme.palette.primary[900],
                    })}
                >
                    {title.length > 20 ? `${title.slice(0, 16)}...` : title}
                </Typography>
                {width < 900 ? (
                    <Typography
                        lineHeight='1.2'
                        sx={(theme) => ({
                            fontFamily: 'Poppins',
                            fontSize: { xs: '0.831rem' },
                            fontWeight: { xs: '600' },
                            color: theme.palette.neutral[500],
                        })}
                    >
                        ${price.toFixed(2)}
                    </Typography>
                ) : (
                    ''
                )}
            </Stack>
        </Stack>
    );
}

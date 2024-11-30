import { Chip, Stack, Typography } from '@mui/joy';
import {
    IoMdCheckmark as TickIcon,
    IoMdClose as CloseIcon,
} from 'react-icons/io';
import { useLocation } from 'react-router-dom';

export default function UpperSection() {
    const { pathname } = useLocation();
    const hasStock = true;

    return (
        <Stack gap={{ xs: '0.268rem', md: '0.234rem' }}>
            <Typography
                fontSize={{ xs: '1rem', md: '0.675rem' }}
                fontWeight={pathname === '/' ? '500' : '600'}
                lineHeight='1.15'
                sx={(theme) => ({
                    color:
                        pathname === '/' ? 'white' : theme.palette.neutral[800],
                })}
            >
                Lenovo ThinkCenter g13th
            </Typography>
            <Chip
                size='productCard'
                sx={(theme) => ({
                    fontSize: { md: '0.469rem' },
                    color: theme.palette.success[500],
                })}
                startDecorator={hasStock ? <TickIcon /> : <CloseIcon />}
            >
                In Stock
            </Chip>
        </Stack>
    );
}

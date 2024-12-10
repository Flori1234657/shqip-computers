import { Chip, Stack, Typography } from '@mui/joy';
import { useContext } from 'react';
import {
    IoMdCheckmark as TickIcon,
    IoMdClose as CloseIcon,
} from 'react-icons/io';
import { useLocation } from 'react-router-dom';

import { ProductCardComtext } from '../../context/useProductCardContext';

export default function UpperSection() {
    const productCard = useContext(ProductCardComtext);

    const { pathname } = useLocation();
    const hasStock = productCard?.available;

    return (
        <Stack gap={{ xs: '0.268rem', md: '0.234rem' }}>
            <Typography
                fontSize={{ xs: '1rem', md: '0.675rem' }}
                fontWeight={pathname === '/' ? '500' : '600'}
                lineHeight='1.15'
                sx={(theme) => ({
                    minHeight: { xs: '2.301rem', md: '1.553rem' },
                    color:
                        pathname === '/' ? 'white' : theme.palette.neutral[800],
                })}
            >
                {productCard && productCard.name
                    ? productCard.name.length > 27
                        ? `${productCard.name.slice(0, 23)}...`
                        : productCard.name
                    : 'This is only for fallback'}
            </Typography>
            <Chip
                size='productCard'
                sx={(theme) => ({
                    fontSize: { md: '0.469rem' },
                    fontFamily: 'Inter',
                    fontWeight: '600',
                    color: hasStock
                        ? theme.palette.success[500]
                        : theme.palette.danger[500],
                })}
                startDecorator={hasStock ? <TickIcon /> : <CloseIcon />}
            >
                {hasStock ? 'In Stock' : 'No Stock'}
            </Chip>
        </Stack>
    );
}

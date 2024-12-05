import { Stack, Typography } from '@mui/joy';
import InformationHeading from '../../../../components/down-section/components/order-process/components/InformationHeading';
import TextValue from '../../../../components/down-section/components/order-process/components/TextValue';

export default function DiscountsMap() {
    const discountsData = [
        {
            id: 'sinsaii30',
            text: 'Weekly discount -20%',
            value: '750.00',
        },
        {
            id: 'snx9883hcjs',
            text: 'Lenovo thinkpad g13',
            value: '12.00',
            specialDeal: 'October deals',
        },
    ];

    return (
        <>
            {discountsData.map((discount) => (
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    key={`discount-modal-item${discount.id}`}
                >
                    <Stack>
                        <InformationHeading text={discount.text} />
                        {discount.specialDeal ? (
                            <Typography
                                lineHeight='1'
                                fontWeight='500'
                                sx={(theme) => ({
                                    fontSize: {
                                        xs: '0.694rem',
                                        md: '0.563rem',
                                    },
                                    color: theme.palette.primary[300],
                                })}
                            >
                                {discount.specialDeal}
                            </Typography>
                        ) : (
                            ''
                        )}
                    </Stack>
                    <TextValue text={`-$${discount.value}`} />
                </Stack>
            ))}
        </>
    );
}

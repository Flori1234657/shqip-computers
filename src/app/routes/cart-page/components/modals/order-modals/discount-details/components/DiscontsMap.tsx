import { Stack, Typography } from '@mui/joy';
import InformationHeading from '../../../../components/down-section/components/order-summary/components/InformationHeading';
import TextValue from '../../../../components/down-section/components/order-summary/components/TextValue';
import useCartStore from 'src/features/shopping-cart/stores/shoppingCart';
import useDealStore from 'src/app/routes/home-page/store/deal';

export default function DiscountsMap() {
    const { cartItems } = useCartStore();
    const { deal } = useDealStore();

    const discountItems = cartItems!.filter(
        (cartItem) => cartItem.item.discount || cartItem.item.dealSection
    );

    return (
        <>
            {discountItems.map((cartItem, index) => (
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    key={`discount-modal-item${cartItem.item.id}-${index}`}
                >
                    <Stack>
                        <InformationHeading
                            text={`${cartItem.item.name.length > 20 ? `${cartItem.item.name.slice(0, 20)}...` : cartItem.item.name}`}
                        />
                        {cartItem.item.dealSection ? (
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
                                {deal!.title}
                            </Typography>
                        ) : (
                            ''
                        )}
                    </Stack>
                    <TextValue
                        text={`-$${cartItem.item.dealSection ? (deal!.percentage / 100) * cartItem.item.defaultPrice : cartItem.item.discount}`}
                    />
                </Stack>
            ))}
        </>
    );
}

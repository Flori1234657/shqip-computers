import { Button } from '@mui/joy';
import { motion } from 'motion/react';
import { useContext } from 'react';
import { MdOutlineShoppingCart as CardIcon } from 'react-icons/md';
import { rotateButtonVariants } from 'src/animations/shared';
import { SingleProductPageContext } from 'src/app/routes/product-page/context/useSingleProductPageContext';
import useCartStore from 'src/features/shopping-cart/stores/shoppingCart';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function AddToCardButton() {
    const { width } = useWindowDimensions();
    const productData = useContext(SingleProductPageContext);
    const addItemToTheCart = useCartStore((state) => state.setCartItems);

    return (
        <Button
            size={width < 900 ? 'md' : 'md2'}
            sx={{ width: { md: '8.906rem' }, alignSelf: { md: 'flex-end' } }}
            endDecorator={<CardIcon />}
            component={motion.button}
            variants={rotateButtonVariants}
            initial='initial'
            animate='whileInView'
            disabled={!productData?.available}
            onClick={() => (productData ? addItemToTheCart(productData) : '')}
        >
            Add To The Card
        </Button>
    );
}

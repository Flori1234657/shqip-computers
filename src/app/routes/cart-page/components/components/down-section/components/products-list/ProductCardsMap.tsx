import { Stack } from '@mui/joy';
import Placeholder from 'src/assets/images/placeholder.png';
import ProductItem from './components/product-cards-map/ProductItem';

export default function ProductCardsMap() {
    const fakeData = [
        {
            id: '1283n8dcc19028j0',
            name: 'Fujitsu Esprimo p700',
            image: Placeholder,
            price: '123.00',
            quantity: 1,
        },
        {
            id: '387db8dbsa809jn2',
            name: 'Lenovo Thinkbook g13th',
            image: Placeholder,
            price: '320.00',
            quantity: 5,
        },
        {
            id: '.z/x.p2-cin901-jax1',
            name: 'Wired mouse M3',
            image: Placeholder,
            price: '25.00',
            quantity: 1,
        },
    ];

    return fakeData.map((product) => (
        <Stack key={`my-bag-product-item${product.id}`}>
            <ProductItem
                image={product.image}
                price={product.price}
                quantity={product.quantity}
                title={product.name}
            />
        </Stack>
    ));
}

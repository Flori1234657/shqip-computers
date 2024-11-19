import { Stack } from '@mui/joy';
import Image from 'src/components/Image';
import EmptyBox from 'src/assets/images/svg/shopping-cart-empty-box.svg';

function NoItemImage() {
    return (
        <Stack
            width='100%'
            height='100vh'
            justifyContent='center'
            alignItems='center'
        >
            <Image
                ratio='1.4/1'
                src={EmptyBox}
                width='15.138rem'
                alt='an empty box'
            />
        </Stack>
    );
}

export default NoItemImage;

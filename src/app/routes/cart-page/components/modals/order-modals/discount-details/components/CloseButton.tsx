import { Button } from '@mui/joy';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';
import { IoMdClose as CloseIcon } from 'react-icons/io';
import useUiStore from 'src/app/routes/cart-page/store/ui';

export default function CloseButton() {
    const { width } = useWindowDimensions();
    const closeModal = useUiStore((state) => state.toggleShowDiscountModal);

    return (
        <Button
            color='danger'
            size={width < 900 ? 'md' : 'md2'}
            endDecorator={<CloseIcon />}
            onClick={() => closeModal()}
        >
            Close
        </Button>
    );
}

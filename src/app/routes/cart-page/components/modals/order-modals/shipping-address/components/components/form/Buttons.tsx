import { Button, Stack } from '@mui/joy';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

import { MdOutlineSave as SaveIcon } from 'react-icons/md';
import { IoMdClose as CloseIcon } from 'react-icons/io';
import useUiStore from 'src/app/routes/cart-page/store/ui';

function Buttons() {
    const { width } = useWindowDimensions();
    const closeModal = useUiStore((state) => state.toggleShippingAddressModal);

    return (
        <Stack
            mt={{ xs: '0.25rem', md: 'unset' }}
            gap={{ xs: '0.75rem', md: '0.469rem' }}
            direction={{ sm: 'row' }}
        >
            <Button
                size={width > 899 ? 'md2' : 'md'}
                type='submit'
                endDecorator={<SaveIcon />}
            >
                Save
            </Button>
            <Button
                size={width > 899 ? 'md2' : 'md'}
                variant='outlined'
                color='danger'
                type='reset'
                endDecorator={<CloseIcon />}
                onClick={() => closeModal()}
            >
                Close
            </Button>
        </Stack>
    );
}

export default Buttons;

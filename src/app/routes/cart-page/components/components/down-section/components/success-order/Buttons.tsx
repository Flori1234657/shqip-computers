import { Button, Stack } from '@mui/joy';
import {
    MdOutlineLocalPrintshop as PrinterIcon,
    MdClose as CloseIcon,
} from 'react-icons/md';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

export default function Buttons() {
    const { width } = useWindowDimensions();

    return (
        <Stack gap={{ xs: '0.5rem', md: '0.234rem' }}>
            <Button
                fullWidth
                size={width < 900 ? 'md' : 'md2'}
                endDecorator={<PrinterIcon />}
            >
                Print The Bill
            </Button>
            <Button
                variant='outlined'
                color='neutral'
                fullWidth
                size={width < 900 ? 'md' : 'md2'}
                endDecorator={<CloseIcon />}
            >
                Close
            </Button>
        </Stack>
    );
}

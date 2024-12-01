import { IconButton } from '@mui/joy';
import {
    FaArrowRight as RightArrIcon,
    FaArrowLeft as LeftArrIcon,
} from 'react-icons/fa6';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';
import useCarouselStore from '../store/carousel';

export default function SideButtons({
    children,
}: {
    children: React.ReactNode;
}) {
    const { width } = useWindowDimensions();
    const { moveElementsLeft, moveElementsRight } = useCarouselStore();

    return (
        <>
            <IconButton
                size={width < 900 ? 'sm' : 'xs'}
                variant='solid'
                sx={(theme) => ({
                    position: 'sticky',
                    left: 0,
                    zIndex: 1,
                    bgcolor: theme.palette.primary[900],
                    maxHeight: 'fit-content',
                })}
                onClick={() => moveElementsLeft()}
            >
                <LeftArrIcon />
            </IconButton>
            {children}
            <IconButton
                size={width < 900 ? 'sm' : 'xs'}
                variant='solid'
                sx={(theme) => ({
                    position: 'sticky',
                    right: 0,
                    bgcolor: theme.palette.primary[900],
                    maxHeight: 'fit-content',
                })}
                onClick={() => moveElementsRight()}
            >
                <RightArrIcon />
            </IconButton>
        </>
    );
}

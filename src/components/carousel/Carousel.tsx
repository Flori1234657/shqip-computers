import { Stack } from '@mui/joy';
import SideButtons from './components/SideButtons';
import useCarouselStore from './store/carousel';
import { useEffect } from 'react';
import { SxProps } from '@mui/joy/styles/types';
import SideShadows from './components/SideShadows';

interface Props {
    elements: React.ReactNode[];
    secondStackStyles: SxProps;
    buttonFunction?: () => void;
}

export default function Carousel({
    elements,
    secondStackStyles,
    buttonFunction,
}: Props) {
    const { setElementsArray: makeCopyArray, elementsArray } =
        useCarouselStore();

    useEffect(() => {
        makeCopyArray(elements);
    }, [elements]);

    return (
        <SideButtons anotherFunction={buttonFunction}>
            <Stack sx={secondStackStyles} position='relative'>
                <SideShadows>
                    {elementsArray?.map((element) => element)}
                </SideShadows>
            </Stack>
        </SideButtons>
    );
}

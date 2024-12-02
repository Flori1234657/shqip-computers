import { Stack } from '@mui/joy';
import SideButtons from './components/SideButtons';
import useCarouselStore from './store/carousel';
import { useEffect } from 'react';
import { SxProps } from '@mui/joy/styles/types';
import SideShadows from './components/SideShadows';

interface Props {
    elements: React.ReactNode[];
    secondStackStyles: SxProps;
}

export default function Carousel({ elements, secondStackStyles }: Props) {
    const { setElementsArray: makeCopyArray, elementsArray } =
        useCarouselStore();

    // taking too long to perform actions find a way to improve the performance
    useEffect(() => {
        console.time();
        makeCopyArray(elements);
        console.timeEnd();
    }, [elements]);

    return (
        <SideButtons>
            <Stack sx={secondStackStyles} position='relative'>
                <SideShadows>
                    {elementsArray?.map((element) => element)}
                </SideShadows>
            </Stack>
        </SideButtons>
    );
}

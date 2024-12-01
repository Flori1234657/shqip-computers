import { Stack } from '@mui/joy';
import SideButtons from './components/SideButtons';
import useCarouselStore from './store/carousel';
import { useEffect } from 'react';

export interface CarouselProps {
    id: string;
    component: React.ReactNode;
}

export default function Carousel(elements: CarouselProps[]) {
    const { setElementsArray: makeCopyArray, elementsArray } =
        useCarouselStore();

    useEffect(() => {
        makeCopyArray(elements);
    }, [elements]);

    return (
        <Stack>
            <SideButtons>
                <Stack>
                    {elementsArray?.map((element) => (
                        <Stack key={element.id}>{element.component}</Stack>
                    ))}
                </Stack>
            </SideButtons>
        </Stack>
    );
}

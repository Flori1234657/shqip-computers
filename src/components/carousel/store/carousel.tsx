/* eslint-disable @typescript-eslint/ban-ts-comment */
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CarouselProps } from '../Carousel';

interface Props {
    elementsArray: CarouselProps[] | undefined;
    setElementsArray: (elements: CarouselProps[]) => void;
    moveElementsLeft: () => void;
    moveElementsRight: () => void;
}

const useCarouselStore = create<Props>()(
    devtools((set) => ({
        elementsArray: undefined,
        setElementsArray: (elements) =>
            set(() => ({ elementsArray: elements })),
        moveElementsLeft: () =>
            set((state) => {
                if (state.elementsArray === undefined)
                    return { elementsArray: undefined };
                //@ts-ignore
                const firstElement: CarouselProps = state.elementsArray.shift();
                return {
                    elementsArray: [
                        ...(state.elementsArray as []),
                        firstElement,
                    ],
                };
            }),
        moveElementsRight: () =>
            set((state) => {
                if (state.elementsArray === undefined)
                    return { elementsArray: undefined };
                //@ts-ignore
                const lastElement: CarouselProps = state.elementsArray.pop();
                return {
                    elementsArray: [
                        lastElement,
                        ...(state.elementsArray as []),
                    ],
                };
            }),
    }))
);

export default useCarouselStore;

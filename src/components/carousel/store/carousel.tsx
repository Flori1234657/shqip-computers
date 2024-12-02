/* eslint-disable @typescript-eslint/ban-ts-comment */
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface Props {
    elementsArray: React.ReactNode[] | undefined;
    setElementsArray: (elements: React.ReactNode[]) => void;
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
                const firstElement: React.ReactNode =
                    state.elementsArray.shift();
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
                const lastElement: React.ReactNode = state.elementsArray.pop();
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

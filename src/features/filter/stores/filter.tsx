import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

/** The filter options will be displayed based on this categoy keys */
export type CategoryKey =
    | 'computer'
    | 'ram'
    | 'hdd'
    | 'ssd'
    | 'cpu'
    | 'dvd-rom'
    | 'motherboard'
    | 'gpu'
    | 'psu';

/** exp. computer --> ram --> ['1 Gb',...] */
type CategoryData = {
    [key in CategoryKey]?: { [key: string]: string[] };
};

interface State {
    filterCategory?: CategoryData;
    categoryToRender: CategoryKey;
    setFilterCategory: (data: CategoryData) => void;
    setCategoryToRender: (key: CategoryKey) => void;
}

const useFilterStore = create<State>()(
    devtools((set) => ({
        categoryToRender: 'computer',
        setFilterCategory: (data) =>
            set((prev) => ({
                filterCategory: { ...prev.filterCategory, ...data },
            })),
        setCategoryToRender: (key) => set(() => ({ categoryToRender: key })),
    }))
);

export default useFilterStore;

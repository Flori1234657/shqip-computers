import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

/** The filter options will be displayed based on this categoy keys */
export type CategoryKey =
    | 'computer'
    | 'ram'
    | 'hdd'
    | 'ssd'
    | 'cpu'
    | 'dvd'
    | 'motherboard'
    | 'gpu'
    | 'psu';

/** exp. computer --> ram --> ['1 Gb',...] */
type CategoryData = {
    [key in CategoryKey]?: { [key: string]: string[] };
};

interface State {
    isFilterVisible: boolean;
    filterCategory?: CategoryData;
    categoryToRender: CategoryKey;
    setIsFilterVisible: () => void;
    setFilterCategory: (data: CategoryData) => void;
    setCategoryToRender: (key: CategoryKey) => void;
}

const useFilterStore = create<State>()(
    devtools((set) => ({
        isFilterVisible: false,
        categoryToRender: 'computer',
        setIsFilterVisible: () =>
            set((prev) => ({ isFilterVisible: !prev.isFilterVisible })),
        setFilterCategory: (data) =>
            set((prev) => ({
                filterCategory: { ...prev.filterCategory, ...data },
            })),
        setCategoryToRender: (key) => set(() => ({ categoryToRender: key })),
    }))
);

export default useFilterStore;

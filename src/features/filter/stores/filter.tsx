import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

/** The filter options will be displayed based on this categoy keys */
type CategoryKey =
    | 'computer'
    | 'ram'
    | 'hdd'
    | 'ssd'
    | 'cpu'
    | 'dvd-rom'
    | 'motherboard'
    | 'gpu'
    | 'psu';

/** exp. computer --> options --> ram --> ['1 Gb',...] */
type CategoryData = {
    [key in CategoryKey]?: { options: { [key: string]: string[] } };
};

interface State {
    filterCategory?: CategoryData;
    setFilterCategory: (data: CategoryData) => void;
}

const useFilterStore = create<State>()(
    devtools((set) => ({
        setFilterCategory: (data) =>
            set((prev) => ({
                filterCategory: { ...prev.filterCategory, ...data },
            })),
    }))
);

export default useFilterStore;

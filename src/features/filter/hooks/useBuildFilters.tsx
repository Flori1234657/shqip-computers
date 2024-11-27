import useFilterStore, { CategoryKey } from '../stores/filter';
import { getFilterCategory } from '../api/getFilterOptions';
import { useLocation } from 'react-router-dom';
import { FilterCategoriesRequestData } from '../types/filterCategoriesRequest';

export default function useBuildFilters() {
    const { pathname } = useLocation();
    const { setFilterCategory, filterCategory } = useFilterStore();

    const hardwareIdMap: { id: string; name: CategoryKey }[] = [
        {
            id: 'kfcj6j0o834a4vjowzbso4mp',
            name: 'ram',
        },
        {
            id: 'ie1d0og530srt23q36c596hw',
            name: 'hdd',
        },
        {
            id: 'bpfzgy8cyrhar7xl94grdmx2',
            name: 'ssd',
        },
        {
            id: 'bnp2lcuavyyd3m0bbkpxhg3g',
            name: 'cpu',
        },
        {
            id: 'uasanydt1fkb9fj8ry39eghf',
            name: 'dvd-rom',
        },
        {
            id: 'khak93z3vrrldggjuaditlqz',
            name: 'motherboard',
        },
        {
            id: 'nax6i208b1z5kvl0c53jg867',
            name: 'gpu',
        },
        {
            id: 'nrxnjfjpelnh4j8komk8wpw7',
            name: 'psu',
        },
    ];

    const createFilters = async () => {
        let filterData: FilterCategoriesRequestData | null = null;

        const computerRegex = /shop\Wcategories\W[pc|laptop]/g;
        const hardwareRegex = pathname.match(
            /shop\Wcategories\Whardware\W(\w+)/
        );

        if (computerRegex.test(pathname) && !filterCategory?.computer)
            filterData = await getFilterCategory('zbb3uoh3ak36oye0qndst4yh');

        if (hardwareRegex)
            hardwareIdMap.map(async (hardware) => {
                if (
                    hardwareRegex[1] === hardware.name &&
                    (!filterCategory || !filterCategory[hardware.name])
                )
                    filterData = await getFilterCategory(hardware.id);
            });

        if (filterData !== null)
            setFilterCategory({
                [filterData.category.name]: {
                    options: filterData.category.options,
                },
            });
    };

    return { createFilters };
}

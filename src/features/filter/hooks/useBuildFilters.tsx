import useFilterStore, { CategoryKey } from '../stores/filter';
import { getFilterCategory } from '../api/getFilterOptions';
import { useLocation } from 'react-router-dom';
import { FilterCategoriesRequestData } from '../types/filterCategoriesRequest';
import useSimpleAlertStore from 'src/features/alert-feedback-simple/store/simpleAlert';
import useRenderStore from 'src/stores/render';

export default function useBuildFilters() {
    const { pathname } = useLocation();
    const { setFilterCategory, setCategoryToRender, filterCategory } =
        useFilterStore();

    const setSimpleAlert = useSimpleAlertStore((state) => state.setData);
    const showSimpleAlert = useRenderStore(
        (state) => state.toggleIsSimpleAlertFeedbackVisible
    );

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
            name: 'dvd',
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

    // this function need performace improvment
    const createFilters = async () => {
        let filterData: FilterCategoriesRequestData | null | undefined =
            undefined;

        const computerRegex = /shop\Wcategories\W(pc|laptop)/g;
        const hardwareRegex = pathname.match(
            /shop\Wcategories\Whardware\W(\w+)/
        );

        try {
            if (computerRegex.test(pathname) && !filterCategory?.computer)
                filterData = await getFilterCategory(
                    'zbb3uoh3ak36oye0qndst4yh'
                );

            if (hardwareRegex) {
                const selectedHardware = hardwareIdMap.filter((hardware) => {
                    if (
                        hardwareRegex[1] === hardware.name &&
                        (!filterCategory || !filterCategory[hardware.name])
                    )
                        return hardware;
                });

                filterData = selectedHardware[0]
                    ? await getFilterCategory(selectedHardware[0].id)
                    : null;
            }
        } catch (error) {
            console.error(error);
            setSimpleAlert('danger', 'Failed getting the filter options!');
            showSimpleAlert();
            return;
        }

        if (filterData)
            setFilterCategory({
                [filterData.category.name]: filterData.category.options,
            });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        if (hardwareRegex) setCategoryToRender(hardwareRegex[1]);
        else setCategoryToRender('computer');
    };

    return { createFilters };
}

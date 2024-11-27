import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useBuildFilters from 'src/features/filter/hooks/useBuildFilters';

export default function OptionsMap() {
    const { pathname } = useLocation();
    const { createFilters } = useBuildFilters();

    useEffect(() => {
        if (/shop\Wcategories\W\w+/g.test(pathname)) createFilters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return <></>;
}

/* eslint-disable @stylistic/js/indent */
import { List, ListItem, Stack, Typography } from '@mui/joy';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useBuildFilters from 'src/features/filter/hooks/useBuildFilters';
import useFilterStore from 'src/features/filter/stores/filter';

export default function OptionsMap() {
    const { pathname } = useLocation();
    const { createFilters } = useBuildFilters();
    const { filterCategory, categoryToRender } = useFilterStore();

    useEffect(() => {
        if (/shop\Wcategories\W\w+/g.test(pathname)) createFilters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <Stack>
            {filterCategory
                ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  Object.entries(filterCategory[categoryToRender]).map(
                      (option) => (
                          <Stack key={`filter-option-map${option[0]}`}>
                              <Typography>{option[0]}</Typography>
                              <List>
                                  {option[1].map((value) => (
                                      <ListItem
                                          key={`filter-option-value-map${value}`}
                                      >
                                          <Typography>{value}</Typography>
                                      </ListItem>
                                  ))}
                              </List>
                          </Stack>
                      )
                  )
                : ''}
        </Stack>
    );
}

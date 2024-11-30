/* eslint-disable @stylistic/js/indent */
import { List, ListItem, Stack, Typography } from '@mui/joy';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useBuildFilters from 'src/features/filter/hooks/useBuildFilters';
import useFilterStore from 'src/features/filter/stores/filter';

export default function OptionsMap() {
    const { pathname } = useLocation();
    const { createFilters } = useBuildFilters();
    const { filterCategory, categoryToRender } = useFilterStore();

    const [renderValues, setRenderValues] = useState<{
        [key: string]: boolean;
    } | null>(null);

    useEffect(() => {
        if (/shop\Wcategories\W\w+/g.test(pathname)) createFilters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <Stack gap={{ xs: '0.75rem', md: '0.469rem' }}>
            {filterCategory
                ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  Object.entries(filterCategory[categoryToRender]).map(
                      (option) => (
                          <Stack
                              key={`filter-option-map${option[0]}`}
                              p={{ xs: '0.5rem', md: '0.234rem' }}
                              gap={{ xs: '0.5rem', md: '0.234rem' }}
                              sx={{
                                  bgcolor: 'white',
                                  borderRadius: {
                                      xs: '0.75rem',
                                      md: '0.352rem',
                                  },
                                  boxShadow:
                                      '0 0.25rem 0.356rem 0.125rem rgba(0,0,0,0.25)',
                                  cursor: { md: 'pointer' },
                              }}
                              onClick={() =>
                                  setRenderValues((prev) =>
                                      prev !== null && prev[option[0]]
                                          ? { [option[0]]: false }
                                          : { [option[0]]: true }
                                  )
                              }
                          >
                              <Typography
                                  fontFamily='Poppins'
                                  fontWeight={'500'}
                                  fontSize={{ xs: '1rem', md: '0.674rem' }}
                                  sx={(theme) => ({
                                      color: theme.palette.neutral[500],
                                  })}
                              >
                                  {option[0].slice(0, 1).toUpperCase()}
                                  {option[0].slice(1)}
                              </Typography>
                              {renderValues !== null &&
                              renderValues[option[0]] ? (
                                  <List
                                      sx={{
                                          gap: {
                                              xs: '0.25rem',
                                              md: '0.118rem',
                                          },
                                      }}
                                  >
                                      {option[1].map((value) => (
                                          <ListItem
                                              key={`filter-option-value-map${value}`}
                                          >
                                              <Typography
                                                  fontSize={{
                                                      xs: '0.831rem',
                                                      md: '0.563rem',
                                                  }}
                                                  fontWeight='500'
                                                  sx={(theme) => ({
                                                      color: theme.palette
                                                          .neutral[500],
                                                  })}
                                              >
                                                  {value}
                                              </Typography>
                                          </ListItem>
                                      ))}
                                  </List>
                              ) : (
                                  ''
                              )}
                          </Stack>
                      )
                  )
                : ''}
        </Stack>
    );
}

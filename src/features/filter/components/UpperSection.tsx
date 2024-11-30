import { IconButton, Stack, Typography } from '@mui/joy';
import { MdOutlineArrowForward as ArrowIcon } from 'react-icons/md';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';
import useFilterStore from '../stores/filter';

export default function UpperSection() {
    const { width } = useWindowDimensions();
    const toggleFilterVisibility = useFilterStore(
        (state) => state.setIsFilterVisible
    );

    return (
        <Stack
            gap={{ xs: '1rem', md: 'unset' }}
            direction='row'
            alignItems='center'
            sx={(theme) => ({
                pb: { xs: '0.5rem', md: 'unset' },
                borderBottom: {
                    xs: `1px solid ${theme.palette.neutral[500]}`,
                    md: 'unset',
                },
            })}
        >
            {width < 900 ? (
                <IconButton
                    variant='solid'
                    size='sm'
                    sx={(theme) => ({ bgcolor: theme.palette.neutral[900] })}
                    onClick={() => toggleFilterVisibility()}
                >
                    <ArrowIcon />
                </IconButton>
            ) : (
                ''
            )}
            <Typography
                fontSize={{ xs: 'lg', md: '0.563rem' }}
                fontWeight='600'
                lineHeight='1.2'
                sx={(theme) => ({
                    color: {
                        xs: theme.palette.primary[900],
                        md: theme.palette.neutral[500],
                    },
                    textTransform: { md: 'uppercase' },
                })}
            >
                Filter
            </Typography>
        </Stack>
    );
}

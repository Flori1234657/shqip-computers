import { usePagination } from 'src/hooks/usePagination';
import { Button } from '@mui/joy';
import useWindowDimensions from 'src/hooks/useWindowsDimesions';

interface Props {
    onPageChange: (page: number) => void;
    totalCount: number;
    siblingCount?: number;
    currentPage: number;
    pageSize: number;
}

const Pagination = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
}: Props) => {
    const { width } = useWindowDimensions();

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange!.length < 2) {
        return null;
    }

    // const lastPage = paginationRange![paginationRange!.length - 1];
    return (
        <>
            {paginationRange!.map((pageNumber, index) => {
                // If the pageItem is a DOT, render the DOTS unicode character
                if (typeof pageNumber === 'string')
                    return (
                        <Button
                            key={`pagination-button${pageNumber}${index}`}
                            size={width < 900 ? 'sm' : 'xs'}
                            variant='outlined'
                            color='neutral'
                            sx={{
                                borderRadius: '50%',
                                maxWidth: { xs: '2rem', md: '1.45rem' },
                                maxHeight: { md: '1.45rem' },
                            }}
                        >
                            ...
                        </Button>
                    );

                // Render our Page Pills
                return (
                    <Button
                        key={`pagination-button${pageNumber}${index}`}
                        size={width < 900 ? 'sm' : 'xs'}
                        variant='outlined'
                        color='neutral'
                        sx={(theme) => ({
                            borderRadius: '50%',
                            bgcolor:
                                pageNumber == currentPage
                                    ? theme.palette.primary[900]
                                    : 'unset',
                            color:
                                pageNumber == currentPage ? 'white' : 'unset',
                            maxWidth: { xs: '2rem', md: '1.45rem' },
                            maxHeight: { md: '1.45rem' },
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </Button>
                );
            })}
        </>
    );
};

export default Pagination;

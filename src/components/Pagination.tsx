import { usePagination } from 'src/hooks/usePagination';
import { Button } from '@mui/joy';

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
            {paginationRange!.map((pageNumber) => {
                // If the pageItem is a DOT, render the DOTS unicode character
                if (typeof pageNumber === 'string') return <Button>...</Button>;

                // Render our Page Pills
                return (
                    <Button onClick={() => onPageChange(pageNumber)}>
                        {pageNumber}
                    </Button>
                );
            })}
        </>
    );
};

export default Pagination;

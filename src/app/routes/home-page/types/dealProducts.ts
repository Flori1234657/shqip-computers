import { Product } from 'src/types/product';

export type DealProducts = {
    data: Product[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
};

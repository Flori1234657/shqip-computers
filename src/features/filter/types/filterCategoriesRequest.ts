import { CategoryKey } from '../stores/filter';

export type FilterCategoriesRequestData = {
    id: string;
    documentId: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    category: {
        name: CategoryKey;
        options: { [key: string]: string[] };
    };
};

import axios from 'axios';
import { FilterCategoriesRequestData } from '../types/filterCategoriesRequest';

export const getFilterCategory = async (categoryId: string) => {
    const request: FilterCategoriesRequestData = await axios
        .get(
            `${import.meta.env.VITE_REACT_APP_BACKEND}api/filter-options/${categoryId}`
        ) // categoryId === documentId in the database
        .then((res) => JSON.parse(res.data));

    return request;
};

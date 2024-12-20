import axios from 'axios';
import { Deal } from '../types/deal';
import { DealProducts } from '../types/dealProducts';
import { throwError } from 'src/utils/throwError';

export const getDeal = async (signal: AbortSignal) => {
    const request: Deal = await axios
        .get(`${import.meta.env.VITE_REACT_APP_BACKEND}api/deal`, { signal })
        .then((res) => res.data.data)
        .catch((error) => throwError(error));

    return request;
};

export const getDealProducts = async (page: number, signal: AbortSignal) => {
    const request: DealProducts = await axios
        .get(
            `${import.meta.env.VITE_REACT_APP_BACKEND}api/products/?filters[dealSection][$eq]=true&pagination[page]=${page}&pagination[pageSize]=6&populate[images][fields][0]=url`,
            { signal }
        )
        .then((res) => res.data)
        .catch((error) => throwError(error));

    return request;
};

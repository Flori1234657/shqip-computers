import axios from 'axios';
import { Deal } from '../types/deal';
import { DealProducts } from '../types/dealProducts';
import { throwError } from 'src/utils/throwError';

export const getDeal = async () => {
    const request: Deal = await axios
        .get(`${import.meta.env.VITE_REACT_APP_BACKEND}api/deal`)
        .then((res) => res.data.data)
        .catch((error) => throwError(error));

    return request;
};

export const getDealProducts = async (page: number) => {
    const request: DealProducts = await axios
        .get(
            `${import.meta.env.VITE_REACT_APP_BACKEND}api/products/?filters[dealSection][$eq]=true&pagination[page]=${page}&pagination[pageSize]=6&populate[images][fields][0]=url`
        )
        .then((res) => res.data)
        .catch((error) => throwError(error));

    return request;
};

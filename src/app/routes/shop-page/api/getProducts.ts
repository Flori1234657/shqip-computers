import axios from 'axios';
import { Meta } from 'src/types/metaData';
import { Product } from 'src/types/product';
import { throwError } from 'src/utils/throwError';

// We have a problem because we are getting 10 products even if we need less (because some will be already at the products store)
export const getNextProducts = async (page = 1, exlude?: string) => {
    const request: { data: Product[]; meta: Meta } = await axios
        .get(
            `${import.meta.env.VITE_REACT_APP_BACKEND}api/products?pagination[page]=${page}&pagination[pageSize]=10&populate[images][fields][0]=url${exlude}`
        )
        .then((res) => res.data)
        .catch((error) => throwError(error));

    return request;
};

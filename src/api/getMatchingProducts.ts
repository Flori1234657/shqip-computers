import axios from 'axios';
import { Product } from 'src/types/product';
import { throwError } from 'src/utils/throwError';

export const getMatchingProducts = async (query: string) => {
    const request: Product[] = await axios
        .get(
            `${import.meta.env.VITE_REACT_APP_BACKEND}api/products?filters${query}&populate[images][fields][0]=url`
        )
        .then((res) => res.data.data)
        .catch((error) => throwError(error));

    return request;
};

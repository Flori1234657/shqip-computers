import axios from 'axios';
import { throwError } from 'src/utils/throwError';
import { SaleRequestData } from '../types/data';

export const createSaleRequest = async (
    data: SaleRequestData,
    signal: AbortSignal
) => {
    const request = await axios
        .post(
            `${import.meta.env.VITE_REACT_APP_BACKEND}api/sale-requests`,
            { data: data },
            {
                signal,
            }
        )
        .then((res) => res.statusText)
        .catch((error) => throwError(error));

    return request;
};

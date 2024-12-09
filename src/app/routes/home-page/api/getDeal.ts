import axios from 'axios';
import { Deal } from '../types/deal';

export const getDeal = async () => {
    const request: Deal = await axios
        .get(`${import.meta.env.VITE_REACT_APP_BACKEND}api/deal`)
        .then((res) => res.data.data)
        .catch((error) => {
            if (error.code === 'ERR_NETWORK')
                throw new Error('Failed to connect to the server');

            throw new Error('Failed to fetch the data');
        });

    return request;
};

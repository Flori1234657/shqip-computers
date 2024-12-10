import { AxiosError } from 'axios';

export const throwError = (error: AxiosError) => {
    if (error.code === 'ERR_NETWORK')
        throw new Error('Failed to connect to the server');

    throw new Error('Failed to fetch the data');
};

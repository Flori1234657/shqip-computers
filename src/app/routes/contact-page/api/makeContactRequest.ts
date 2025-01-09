import axios from 'axios';
import { throwError } from 'src/utils/throwError';
import { ContactFormData } from '../types/data';

export const createContactRequest = async (
    data: ContactFormData,
    signal: AbortSignal
) => {
    const request = await axios
        .post(
            `${import.meta.env.VITE_REACT_APP_BACKEND}api/contact-requests`,
            { data },
            {
                signal,
            }
        )
        .then((res) => res.statusText)
        .catch((error) => throwError(error));

    return request;
};

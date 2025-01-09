import { useState } from 'react';
import useDisplayAlert from 'src/features/alert-feedback/hooks/useDisplayAlert';
import { ContactFormData } from '../types/data';
import { createContactRequest } from '../api/makeContactRequest';

export default function useMakeContactRequest() {
    const [isLoading, setIsLoading] = useState(false);
    const { alertUser } = useDisplayAlert();

    const makeContactRequest = async (
        data: ContactFormData,
        signal: AbortSignal
    ) => {
        setIsLoading(true);

        const response = await createContactRequest(data, signal);

        setIsLoading(false);

        if (response === 'Created') {
            alertUser({
                type: 'Success',
                description:
                    'Your form is submitted successfully! Now wait for our response. ',
            });

            return;
        }

        alertUser({
            type: 'Error',
            description: 'A problem occurred while making your request!',
        });
    };

    return { makeContactRequest, isLoading };
}

import { useState } from 'react';
import { createSaleRequest } from '../api/makeSaleRequest';
import { SaleRequestData } from '../types/data';
import useDisplayAlert from 'src/features/alert-feedback/hooks/useDisplayAlert';

export default function useMakeSaleRequest() {
    const [isLoading, setIsLoading] = useState(false);
    const { alertUser } = useDisplayAlert();

    const makeSaleRequest = async (
        data: SaleRequestData,
        signal: AbortSignal
    ) => {
        setIsLoading(true);

        const response = await createSaleRequest(data, signal);

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

    return { makeSaleRequest, isLoading };
}

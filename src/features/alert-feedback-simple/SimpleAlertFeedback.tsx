import { Alert, Typography } from '@mui/joy';
import useSimpleAlertStore from './store/simpleAlert';
import { useEffect } from 'react';
import useRenderStore from 'src/stores/render';

export default function SimpleAlertFeedback() {
    const { data } = useSimpleAlertStore();
    const removeAlert = useRenderStore(
        (state) => state.toggleIsSimpleAlertFeedbackVisible
    );

    useEffect(() => {
        setTimeout(removeAlert, 3000);
    });

    return (
        <Alert
            color={data ? data.type : 'neutral'}
            sx={(theme) => ({
                position: 'absolute',
                zIndex: 10,
                bottom: '5vh',
                left: 0,
                right: 0,
                mx: 'auto',

                width: 'fit-content',
                borderRadius: '0.75rem',
                boxShadow: theme.shadow.boxShadow69,
            })}
        >
            <Typography>
                {data ? data.description : 'No description is provided'}
            </Typography>
        </Alert>
    );
}

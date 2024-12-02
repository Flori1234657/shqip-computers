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
                position: { xs: 'absolute', md: 'fixed' },
                zIndex: 100,
                bottom: '5vh',
                left: 0,
                right: 0,
                mx: 'auto',

                width: 'fit-content',
                padding: { md: '0.469rem 0.75rem' },
                borderRadius: { xs: '0.75rem', md: '0.469rem' },
                boxShadow: theme.shadow.boxShadow69,
            })}
        >
            <Typography fontSize={{ md: '0.563rem' }}>
                {data ? data.description : 'No description is provided'}
            </Typography>
        </Alert>
    );
}

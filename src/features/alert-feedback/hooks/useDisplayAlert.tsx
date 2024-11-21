import useRenderStore from 'src/stores/render';
import useAlertStore from '../store/alert';
import AlertData from '../interfaces/alert';

export default function useDisplayAlert() {
    const renderAlert = useRenderStore(
        (state) => state.toggleIsAlertFeedbackVisible
    );
    const fillAlertData = useAlertStore((state) => state.setData);

    const alertUser = (props: AlertData) => {
        renderAlert();
        fillAlertData(props.type, props.description);
    };

    return { alertUser };
}

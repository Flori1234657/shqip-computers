import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type AlertTypes = 'danger' | 'neutral' | 'primary' | 'success' | 'warning';

interface Props {
    data?: {
        type: AlertTypes;
        description: string;
    };
    setData: (type: AlertTypes, description: string) => void;
}

const useSimpleAlertStore = create<Props>()(
    devtools((set) => ({
        setData: (type, description) =>
            set(() => ({
                data: {
                    type,
                    description,
                },
            })),
    }))
);

export default useSimpleAlertStore;

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import AlertData from '../interfaces/alert';

interface Data extends AlertData {
    setData: (type: 'Success' | 'Error', description: string) => void;
}

const useAlertStore = create<Data>()(
    devtools((set) => ({
        type: 'Success',
        description:
            'Your form is submitted successfully! Now wait for our response. ',
        setData: (type, description) =>
            set(() => ({
                type,
                description,
            })),
    }))
);

export default useAlertStore;

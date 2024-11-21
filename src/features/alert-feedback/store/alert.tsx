import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import AlertData from '../interfaces/alert';

interface Data extends AlertData {
    setData: (type: 'Success' | 'Error', description: string) => void;
}

const useAlertStore = create<Data>()(
    devtools((set) => ({
        type: 'Success',
        description: '',
        setData: (type, description) =>
            set(() => ({
                type,
                description,
            })),
    }))
);

export default useAlertStore;

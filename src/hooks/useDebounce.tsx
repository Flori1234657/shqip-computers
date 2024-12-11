import { useEffect, useState } from 'react';

interface Props {
    delay: number;
    action: (debouncedValue: string) => void;
}

export const useDebounce = ({ action, delay }: Props) => {
    const [searchValue, setSearchValue] = useState<string | null>(null);

    useEffect(() => {
        if (!searchValue) return;

        const handler = setTimeout(() => {
            action(searchValue);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [delay, searchValue]); // if I also put the action not ending loop will start

    return { setSearchValue };
};

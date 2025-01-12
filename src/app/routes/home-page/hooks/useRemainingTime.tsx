import { useEffect, useRef, useState } from 'react';
import useDealStore from '../store/deal';
import { calculateTheTimeLeft } from '../utils/deal';

type TimeLeftFormat =
    | 0
    | {
          days: number;
          hours: number;
          minutes: number;
          seconds: number;
      };

export default function useRemainingTime() {
    const deal = useDealStore((state) => state.deal);
    const [timeLeft, setTimeLeft] = useState<TimeLeftFormat | 0>(0);
    const intervalRef = useRef<undefined | ReturnType<typeof setInterval>>(
        undefined
    );

    useEffect(() => {
        if (!intervalRef.current)
            intervalRef.current = setInterval(() => {
                setTimeLeft(() =>
                    deal ? calculateTheTimeLeft(deal.expireDate) : 0
                );
            }, 1000);

        if (import.meta.env.PROD)
            return () => {
                clearInterval(intervalRef.current);
            };
    }, [deal]);

    if (timeLeft)
        return {
            timeData: [
                {
                    unit: timeLeft.days,
                    type: 'Day',
                },
                {
                    unit: timeLeft.hours,
                    type: 'Hour',
                },
                {
                    unit: timeLeft.minutes,
                    type: 'Min',
                },
                {
                    unit: timeLeft.seconds,
                    type: 'Sec',
                },
            ],
        };

    return 0;
}

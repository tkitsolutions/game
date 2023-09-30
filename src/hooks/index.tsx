import { useState, useEffect } from 'react';

export function useProductionMine(baseValue?: number, target?: number, storage?: number) {
    const [value, setValue] = useState(baseValue);

    useEffect(() => {
        if (baseValue && target && storage) {
            if (storage === value) {
                return; // Stop if the target value is already reached
            }

            const timeInterval = (3600 / target) * 1000; // Interval in milliseconds (0.0694 seconds)

            const intervalId = setInterval(() => {
                if (value && value < storage) {
                    setValue(prevValue => prevValue && prevValue + 1);
                } else {
                    clearInterval(intervalId);
                }
            }, timeInterval);

            return () => {
                clearInterval(intervalId);
            };
        }
    }, [value, storage]);

    return { value };
}

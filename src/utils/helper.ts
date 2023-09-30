import { UseToastOptions, createStandaloneToast } from '@chakra-ui/react';
const { toast } = createStandaloneToast();

export function intoView(id: string) {
    const elem = document.getElementById(id);
    elem?.scrollIntoView({ behavior: 'smooth' });
}

export const calculateTimeLeft = (time: number) => {
    const difference = +new Date(time) - +new Date();

    let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
};

export function showToast(
    status: UseToastOptions['status'],
    description: UseToastOptions['description'],
    title?: UseToastOptions['title'],
) {
    return toast({ status, title, description });
}

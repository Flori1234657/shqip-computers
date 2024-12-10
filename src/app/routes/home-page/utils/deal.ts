export const hasDealExpired = (expireDate: string): boolean => {
    const date = expireDate.match(/\d+\W\d+\W\d+/)![0];
    const time = expireDate.match(/T(\d+\W\d+\W\d+)/)![1];

    const newDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
    const newTime = `${new Date().getHours()}:${new Date().getMinutes() + 1}:${new Date().getSeconds()}`;

    return `${date}&${time}` === `${newDate}&${newTime}`;
};

export const calculateTheTimeLeft = (expireDate: string) => {
    // Current date and time
    const now = new Date();

    // The future date and time
    const futureDate = new Date(expireDate); // Combine date and time in ISO format

    // Calculate the difference in milliseconds
    const diff = futureDate - now;

    // If the future date is in the future, continue calculating
    if (diff > 0) {
        // Convert the difference into days, hours, minutes, and seconds
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    } else return 0;
};

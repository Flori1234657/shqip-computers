export const hasDealExpired = (expireDate: string): boolean => {
    const date = expireDate.match(/\d+\W\d+\W\d+/)![0];
    const time = expireDate.match(/T(\d+\W\d+\W\d+)/)![1];

    const newDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
    const newTime = `${new Date().getHours()}:${new Date().getMinutes() + 1}:${new Date().getSeconds()}`;

    return `${date}&${time}` === `${newDate}&${newTime}`;
};

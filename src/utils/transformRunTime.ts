export const transformRunTime = (time: number): string => {
    const hours = Math.floor(time / 60);
    const min = time - hours * 60;
    return `${hours}h ${min}m`;
};

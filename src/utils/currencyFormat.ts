const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const currencyFormat = (number: number): string => {
    return formatter.format(number);
};

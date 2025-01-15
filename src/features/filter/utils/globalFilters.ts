export const calculateLableValue = (values: number[]) => {
    const calculatedValueA = (values[0] / 100) * 3500;
    const calculatedValueB = (values[1] / 100) * 3500;

    return [calculatedValueA.toFixed(0), calculatedValueB.toFixed(0)];
};

export const buildPriceQuery = (values: number[]) => {
    if (values[0] === 0 && values[1] === 3500) return null;

    return `&filters[defaultPrice][$gte]=${calculateLableValue(values)[0]}&filters[defaultPrice][$lte]=${calculateLableValue(values)[1]}`;
};

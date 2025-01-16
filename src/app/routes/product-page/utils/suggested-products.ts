export const getRandomProducts = <T>(products: T[]): T[] => {
    if (products.length <= 10) {
        return products.slice();
    }

    const shuffled = [...products].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
};

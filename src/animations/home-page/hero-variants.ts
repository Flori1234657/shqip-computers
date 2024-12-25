export const heroBlobVariants = {
    initialLeft: { opacity: 0, scale: 0 },
    animateLeft: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 1,
            duration: 1,
            type: 'spring',
            bounce: 0.5,
        },
    },
    initialRight: { opacity: 0, scale: 0 },
    animateRight: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 1.5,
            duration: 1,
            type: 'spring',
            bounce: 0.5,
        },
    },
};

export const heroTextVariants = {
    initial: { translateY: 100, opacity: 0 },
    animate: {
        translateY: 0,
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

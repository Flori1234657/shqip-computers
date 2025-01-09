export const cardsCarouselVariants = {
    initial: { width: 0, overflow: 'hidden' },
    whileInView: {
        width: '100%',
        overflow: 'visible',
        transition: {
            duration: 0.5,
            type: 'spring',
            damping: 10,
            stiffness: 100,
        },
    },
};

export const alertFeedbackVariants = {
    initial: {
        opacity: 0,
    },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
};

export const rotateButtonVariants = {
    initial: { rotateX: 360 },
    whileInView: {
        rotateX: 0,
        transition: { duration: 0.5 },
    },
};

export const modalSimpleVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
};

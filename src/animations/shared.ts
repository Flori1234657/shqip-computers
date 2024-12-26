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

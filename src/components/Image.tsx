import { AspectRatio } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';
import { motion, MotionProps } from 'motion/react';
import { CSSProperties } from 'react';

interface Props<T> {
    ratio: string;
    src: string;
    alt: string;
    width: string | T;

    objectFit?: CSSProperties['objectFit'];
    otherStyles?: SxProps;
    animate?: MotionProps;
}

function Image({
    ratio,
    src,
    alt,
    width,
    objectFit,
    otherStyles,
    animate,
}: Props<{ xs?: string; sm?: string; md?: string; lg?: string; xl?: string }>) {
    return (
        <AspectRatio
            component={animate ? motion.div : 'div'}
            ratio={ratio}
            sx={{ width, ...otherStyles }}
            objectFit={objectFit || 'cover'}
            slotProps={{
                content: {
                    style: {
                        backgroundColor: 'inherit',
                    },
                },
            }}
            {...(animate ? { ...animate } : '')}
        >
            <img src={src} alt={alt} />
        </AspectRatio>
    );
}

export default Image;

import { AspectRatio } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';
import { CSSProperties } from 'react';

interface Props<T> {
    ratio: string;
    src: string;
    alt: string;
    width: string | T;

    objectFit?: CSSProperties['objectFit'];
    otherStyles?: SxProps;
}

function Image({
    ratio,
    src,
    alt,
    width,
    objectFit,
    otherStyles,
}: Props<{ xs?: string; sm?: string; md?: string; lg?: string; xl?: string }>) {
    return (
        <AspectRatio
            ratio={ratio}
            sx={{ width, ...otherStyles }}
            objectFit={objectFit || 'cover'}
            slotProps={{
                content: {
                    style: {
                        backgroundColor: 'transparent',
                    },
                },
            }}
        >
            <img src={src} alt={alt} />
        </AspectRatio>
    );
}

export default Image;

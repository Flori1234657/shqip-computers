import { AspectRatio } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';
import { CSSProperties } from 'react';

interface Props {
    ratio: string;
    src: string;
    alt: string;
    width: string;

    objectFit?: CSSProperties['objectFit'];
    otherStyles?: SxProps;
}

function Image({ ratio, src, alt, width, objectFit, otherStyles }: Props) {
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

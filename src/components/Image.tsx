import { AspectRatio } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';

interface Props {
    ratio: string;
    src: string;
    alt: string;
    width: string;

    otherStyles?: SxProps;
}

function Image({ ratio, src, alt, width, otherStyles }: Props) {
    return (
        <AspectRatio
            ratio={ratio}
            sx={{ width, ...otherStyles }}
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

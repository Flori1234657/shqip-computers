import { AspectRatio } from '@mui/joy';

interface Props {
    ratio: string;
    src: string;
    alt: string;
    width: string;
}

function Image({ ratio, src, alt, width }: Props) {
    return (
        <AspectRatio ratio={ratio} sx={{ width }}>
            <img src={src} alt={alt} />
        </AspectRatio>
    );
}

export default Image;

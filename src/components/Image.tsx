import { AspectRatio } from '@mui/joy';

interface Props {
    ratio: string;
    src: string;
    alt: string;
}

function Image({ ratio, src, alt }: Props) {
    return (
        <AspectRatio ratio={ratio}>
            <img src={src} alt={alt} />
        </AspectRatio>
    );
}

export default Image;

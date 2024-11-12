import { Stack, Typography } from '@mui/joy';
import Image from 'src/components/Image';
import Blob from 'src/assets/images/svg/about-us/blob.svg';

export default function AboutUs() {
    return (
        <Stack>
            <Typography>About our company</Typography>
            <Image ratio='0.88/1' src={Blob} width='17.116rem' alt='blob' />
            <Typography>
                Lorem ipsum dolor sit amet consectetur. Leo volutpat interdum
                massa nunc. Morbi massa sit tellus velit eget tempus faucibus
                consectetur adipiscing. Dignissim adipiscing lectus duis eget
                enim tellus ac sollicitudin. Amet nec volutpat vitae diam eget.
                Phasellus congue diam eget nulla. Gravida dignissim a nulla nisi
                elit venenatis. At magna nisi sed dui rutrum rhoncus aliquam
                imperdiet non. Molestie sed in fermentum integer mauris nunc.
                Tincidunt semper egestas a faucibus gravida.Ullamcorper nisi sed
                lectus egestas vel turpis congue nam. Egestas donec porttitor
                nunc pulvinar purus iaculis imperdiet. Volutpat maecenas nunc
                duis lacus lectus eu eu venenatis convallis. Nisl justo nibh
                nascetur integer fermentum. Fermentum sed lacus feugiat aliquet
                facilisi orci in nec pulvinar. Orci vel erat adipiscing aliquam.
            </Typography>
        </Stack>
    );
}

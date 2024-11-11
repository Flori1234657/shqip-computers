import { Stack } from '@mui/joy';
import UpperContent from './components/deals-section/UpperContent';
import DownContent from './components/deals-section/DownContent';

import Image from 'src/components/Image';
import BigBlob from 'src/assets/images/svg/home/deals-blob.svg';

function DealsSection() {
    return (
        <Stack
            mt='19.75rem'
            gap='4rem'
            sx={{ position: 'relative', overflowX: 'visible' }}
        >
            <Image
                ratio='3.34/1'
                src={BigBlob}
                width='106.926rem'
                alt='big blob'
                otherStyles={{
                    position: 'absolute',
                    left: '-51rem',
                    top: '-2.25rem',
                    zIndex: -1,
                }}
            />

            <UpperContent />
            <DownContent />
        </Stack>
    );
}

export default DealsSection;

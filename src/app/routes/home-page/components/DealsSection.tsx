import { Stack } from '@mui/joy';
import UpperContent from './components/deals-section/UpperContent';
import DownContent from './components/deals-section/DownContent';

import Image from 'src/components/Image';
import BigBlob from 'src/assets/images/svg/home/deals-blob.svg';
import useDealStore from '../store/deal';

function DealsSection() {
    const { deal } = useDealStore();

    return !deal ? (
        ''
    ) : (
        <Stack
            width={{ sm: '100%', md: '43.359rem' }}
            alignItems={{ sm: 'center' }}
            gap={{ xs: '4rem', md: '3.063rem' }}
            sx={{
                position: 'relative',
                overflowX: 'visible',
                mt: { xs: '19.75rem', sm: '15rem', md: '16.876rem' },
            }}
        >
            <Image
                ratio='3.34/1'
                src={BigBlob}
                width={{ xs: '106.926rem', md: '107.483rem' }}
                alt='big blob'
                otherStyles={{
                    position: 'absolute',
                    left: { xs: '-51rem', md: '-34.188rem' },
                    top: { xs: '-2.25rem', md: '-6.063rem' },
                    zIndex: -1,
                }}
            />

            <UpperContent />
            <DownContent />
        </Stack>
    );
}

export default DealsSection;

import { Stack } from '@mui/joy';
import Image from 'src/components/Image';
import BigBlob from 'src/assets/images/svg/home/deals-blob.svg';
import useDealStore from '../store/deal';
import { hasDealExpired } from '../utils/deal';
import useGetDeal from '../hooks/useGetDeal';
import { lazy, Suspense, useEffect } from 'react';

const UpperContent = lazy(
    () => import('./components/deals-section/UpperContent')
);
const DownContent = lazy(
    () => import('./components/deals-section/DownContent')
);

function DealsSection() {
    const deal = useDealStore((state) => state.deal);
    const { requestDeal, requestDealProducts } = useGetDeal();

    useEffect(() => {
        const controller = new AbortController();

        requestDeal(controller.signal);
        requestDealProducts(controller.signal);

        return () => controller.abort();
    }, []);

    return !deal ? (
        ''
    ) : hasDealExpired(deal.expireDate) ? (
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
            <Suspense fallback=''>
                <UpperContent />
                <DownContent />
            </Suspense>
        </Stack>
    );
}

export default DealsSection;

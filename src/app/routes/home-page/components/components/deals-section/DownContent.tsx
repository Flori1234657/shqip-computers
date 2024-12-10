import { Stack } from '@mui/joy';
import Carousel from 'src/components/carousel/Carousel';
import Image from 'src/components/Image';
import useDealStore from '../../../store/deal';
import useGetDeal from '../../../hooks/useGetDeal';
import useSelectProductStore from '../../../store/select';

function DownContent() {
    const offerProducts = useDealStore((state) => state.dealProducts?.data);
    const meta = useDealStore((state) => state.dealProducts?.meta.pagination);
    const selectProduct = useSelectProductStore(
        (state) => state.setSelectedProduct
    );

    const { requestDealProducts } = useGetDeal();

    const fetchNextProducts = () => {
        if (meta && meta.pageCount > meta.page)
            requestDealProducts(meta.page + 1);
    };

    return (
        <Stack
            width={{ sm: '100%' }}
            direction='row'
            alignItems='center'
            justifyContent='space-between'
        >
            {offerProducts ? (
                <Carousel
                    buttonFunction={fetchNextProducts}
                    elements={offerProducts.map((product) => (
                        <Stack
                            key={`card-image-product${product.id}`}
                            sx={(theme) => ({
                                backgroundColor: theme.palette.neutral[800],
                                borderRadius: { xs: '0.5rem', md: '0.352rem' },
                                cursor: { md: 'pointer' },
                                ':hover': {
                                    border: '1px solid white',
                                },
                            })}
                            onClick={() => selectProduct(product.documentId)}
                        >
                            <Image
                                ratio='1.54/1'
                                src={`${import.meta.env.VITE_REACT_APP_BACKEND}${product.images[0].url}`}
                                width={{ xs: '10rem', md: '5.859rem' }}
                                objectFit='contain'
                                alt='product'
                            />
                        </Stack>
                    ))}
                    secondStackStyles={{
                        maxWidth: { xs: '10rem', sm: '20rem', md: '39.178rem' },
                        height: { xs: '6.503rem', md: 'auto' },
                        gap: { xs: '1.5rem', md: '0.8rem' },
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        borderRadius: { xs: '0.5rem', md: '0.352rem' },
                        overflow: 'hidden',
                    }}
                />
            ) : (
                ''
            )}
        </Stack>
    );
}

export default DownContent;

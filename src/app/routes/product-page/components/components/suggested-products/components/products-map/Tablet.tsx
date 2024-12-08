import { Grid } from '@mui/joy';
import PlaceholderImage from 'src/assets/images/placeholder.png';
import Image from 'src/components/Image';

export default function Tablet() {
    const offerProducts = [
        {
            id: 'asasw322',
            image: PlaceholderImage,
        },
        {
            id: '98ahaca',
            image: PlaceholderImage,
        },
        {
            id: '219fh9cn98b92',
            image: PlaceholderImage,
        },
        {
            id: '05s15w2e2',
            image: PlaceholderImage,
        },
        {
            id: '!87b98dh899213',
            image: PlaceholderImage,
        },
        {
            id: '!22ss',
            image: PlaceholderImage,
        },
    ];

    return (
        <Grid
            container
            gap={{ sm: '0.75rem', md: '0.703rem' }}
            sx={{
                justifyContent: 'center',
                pb: { sm: '0.5rem', md: 0 },
                maxWidth: { md: '12.422rem' },
            }}
        >
            {offerProducts.map((image) => (
                <Grid
                    key={image.id}
                    sx={(theme) => ({
                        position: { md: 'relative' },
                        borderRadius: { sm: '0.5rem', md: '0.352rem' },
                        boxShadow: theme.shadow.productPageSuggested,
                        bgcolor: 'white',

                        ':hover': {
                            ':before': {
                                display: { xs: 'none', md: 'flex' },
                                content: "'Hp Z-book 440 32 ram'",
                                width: '100%',
                                height: '100%',
                                borderRadius: '0.352rem',
                                padding: '0.469rem 0.352rem',
                                alignItems: 'flex-end',
                                position: 'absolute',
                                bottom: 0,
                                zIndex: 1,
                                background:
                                    'linear-gradient(180deg, rgba(11,107,203,0) 0%, rgba(11,107,203,1) 100%)',
                                cursor: 'pointer',

                                fontSize: '0.469rem',
                                fontWeight: '500',
                                color: 'white',
                            },
                        },
                    })}
                >
                    <Image
                        ratio='1.54/1'
                        src={image.image}
                        width={{ sm: '10rem', md: '5.859rem' }}
                        objectFit='contain'
                        alt='product'
                    />
                </Grid>
            ))}
        </Grid>
    );
}

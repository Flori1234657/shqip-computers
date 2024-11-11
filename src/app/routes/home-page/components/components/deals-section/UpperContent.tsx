import { Grid, Stack, Typography } from '@mui/joy';
import ProductCard from 'src/features/product-card/ProductCard';
import AvailableTimeCards from './components/upper-content/AvailableTimeCards';

export default function UpperContent() {
    return (
        <Grid container>
            <Grid spacing={12} width='100%' pb='0.5rem'>
                <Stack gap='0.5rem'>
                    <Typography level='title-sm'>
                        October <span style={{ color: '#C41C1C' }}>-20%</span>{' '}
                        Deals!
                    </Typography>
                    <Typography
                        fontSize='md'
                        sx={(theme) => ({
                            fontFamily: 'Poppins',
                            fontWeight: '600',
                            lineHeight: '1.3',
                            alignSelf: 'flex-end',
                            color: theme.palette.danger[700],
                        })}
                    >
                        Offer end's in:
                    </Typography>
                </Stack>
            </Grid>
            <Grid spacing={8}>
                <Stack
                    sx={{
                        border: '2px solid red',
                        width: '183px',
                        height: '287.7px',
                    }}
                >
                    <ProductCard />
                </Stack>
            </Grid>
            <Grid spacing={4} ml='1.5rem'>
                <Stack gap='1.5rem'>
                    <AvailableTimeCards />
                </Stack>
            </Grid>
        </Grid>
    );
}

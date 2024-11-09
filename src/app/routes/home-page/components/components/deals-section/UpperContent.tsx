import { Divider, Grid, Stack, Typography } from '@mui/joy';
import ProductCard from 'src/features/product-card/ProductCard';

export default function UpperContent() {
    return (
        <Grid container>
            <Grid spacing={12}>
                <Stack>
                    <Typography>
                        October <span>-20%</span> Deals!
                    </Typography>
                    <Typography>Offer end's in:</Typography>
                </Stack>
            </Grid>
            <Grid spacing={8}>
                <ProductCard />
            </Grid>
            <Grid spacing={4}>
                <Stack>
                    <Stack>
                        <Typography>1</Typography>
                        <Divider orientation='horizontal' />
                        <Typography>Day</Typography>
                    </Stack>
                    <Stack>
                        <Typography>23</Typography>
                        <Divider orientation='horizontal' />
                        <Typography>Hour</Typography>
                    </Stack>
                    <Stack>
                        <Typography>36</Typography>
                        <Divider orientation='horizontal' />
                        <Typography>Min</Typography>
                    </Stack>
                    <Stack>
                        <Typography>06</Typography>
                        <Divider orientation='horizontal' />
                        <Typography>Sec</Typography>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
}

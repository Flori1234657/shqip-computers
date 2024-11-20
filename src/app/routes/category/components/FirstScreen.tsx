import { Button, Grid, Stack, Typography } from '@mui/joy';
import Image from 'src/components/Image';
import availableCategories from '../availableCategories';

import { MdClose as CloseIcon } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function FirstScreen() {
    const navigate = useNavigate();

    return (
        <Stack>
            <Grid container>
                {availableCategories.map((category) => (
                    <Grid xs={6}>
                        <Stack
                            onClick={() =>
                                navigate(`/categories/${category.id}`)
                            }
                        >
                            <Typography>{category.title}</Typography>
                            <Image
                                ratio='1.71/1'
                                width='18.75rem'
                                alt='category item'
                                src={category.image}
                            />
                        </Stack>
                    </Grid>
                ))}
            </Grid>

            <Button startDecorator={<CloseIcon />}>Close</Button>
        </Stack>
    );
}

export default FirstScreen;

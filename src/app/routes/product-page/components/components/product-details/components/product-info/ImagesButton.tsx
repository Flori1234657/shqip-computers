import { Stack } from '@mui/joy';
import React from 'react';
import ImagesCollection from './components/images-button/ImagesCollection';
import AddToCardButton from './components/images-button/AddToCardButton';

interface Props {
    children?: React.ReactNode;
}

export default function ImagesButton({ children }: Props) {
    return (
        <Stack gap={{ xs: '0.75rem' }}>
            <ImagesCollection />
            {children}
            <AddToCardButton />
        </Stack>
    );
}

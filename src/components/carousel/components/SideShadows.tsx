import { Stack } from '@mui/joy';
import { useLocation } from 'react-router-dom';

export default function SideShadows({
    children,
}: {
    children: React.ReactNode;
}) {
    const { pathname } = useLocation();

    return (
        <>
            <Stack
                sx={{
                    position: 'absolute',
                    left: { sm: '2rem', md: 0 },
                    top: 0,
                    zIndex: 1,

                    display:
                        pathname == '/' ? 'none' : { xs: 'none', sm: 'unset' },
                    height: '100%',
                    width: { sm: '1.25rem', md: '1rem' },
                    bgcolor: 'white',
                    boxShadow: {
                        sm: '0.688rem 0 0.875rem 0.375rem rgba(255,255,255,1)',
                        md: '0.688rem 0 0.875rem 0.75rem rgba(255,255,255,1)',
                    },
                }}
            ></Stack>
            {children}
            <Stack
                sx={{
                    position: 'absolute',
                    right: { sm: '2rem', md: 0 },
                    top: 0,
                    zIndex: 1,

                    display:
                        pathname == '/' ? 'none' : { xs: 'none', sm: 'unset' },
                    height: '100%',
                    width: { sm: '1.25rem', md: '1rem' },
                    bgcolor: 'white',
                    boxShadow: {
                        sm: '-0.688rem 0 0.875rem 0.375rem rgba(255,255,255,1)',
                        md: '-0.688rem 0 0.875rem 0.75rem rgba(255,255,255,1)',
                    },
                }}
            ></Stack>
        </>
    );
}

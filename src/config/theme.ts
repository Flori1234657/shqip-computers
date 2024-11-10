import { extendTheme } from '@mui/joy/styles';

interface NewColors {
    gradient: {
        heroTxt: string;
        blob: string;
        masiveBlob: string;
        lines: string;
        sendSuccess: string;
    };
}

// Gjej nje menyr me efikase per ta implementuar
declare module '@mui/joy/styles' {
    interface Palette extends NewColors {
        gradient: {
            heroTxt: string;
            blob: string;
            masiveBlob: string;
            lines: string;
            sendSuccess: string;
        };
    }
}

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                gradient: {
                    heroTxt:
                        'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(61,153,245,1) 100%)',
                    blob: 'linear-gradient(180deg, rgba(11,107,203,0.8) 0%, rgba(207,229,252,1) 100%)',
                    masiveBlob:
                        'linear-gradient(90deg, rgba(11,107,203,1) 0%, rgba(158,204,250,0.1) 100%)',
                    lines: 'linear-gradient(180deg, rgba(11,107,203,1) 0%, rgba(207,229,252,1) 100%)',
                    sendSuccess:
                        'linear-gradient(180deg, rgba(11,107,203,1) 0%, rgba(158,204,250,1) 100%)',
                },
            },
        },
    },
    fontSize: {
        xs: '0.694rem',
        sm: '0.831rem',
        md: '1rem',
        lg: '1.2rem',
        xl: '1.438rem',
        xl2: '1.725rem',
        xl3: '2.075rem',
        xl4: '2.488rem',
    },
    typography: {
        'title-lg': {
            fontFamily: 'Poppins',
            fontWeight: '700',
            fontSize: 'var(--joy-fontSize-x14,2.488rem)',
            lineHeight: '1.1',
        },
        'title-md': {
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: 'var(--joy-fontSize-x12,1.725rem)',
            lineHeight: '1.2',
        },
        'title-sm': {
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: 'var(--joy-fontSize-xl,1.438rem)',
            lineHeight: '1.2',
        },
        'body-lg': {
            fontWeight: '500',
            fontSize: 'var(--joy-fontSize-md,1rem)',
            lineHeight: '1.25',
        },
        'body-md': {
            fontWeight: '400',
            fontSize: 'var(--joy-fontSize-sm,0.831rem)',
            lineHeight: '1.45',
        },
    },
    breakpoints: {
        values: {
            xs: 320,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    components: {
        JoyButton: {
            styleOverrides: {
                root: {
                    borderRadius: '0.5rem',
                    '-webkit-tap-highlight-color': 'none',
                },
            },
        },
        JoyIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: '0.5rem',
                    '-webkit-tap-highlight-color': 'none',
                },
            },
        },
    },
});

export default theme;

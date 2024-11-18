import { extendTheme } from '@mui/joy/styles';

declare module '@mui/joy/styles' {
    interface Palette {
        gradient: {
            heroTxt: string;
            blob: string;
            masiveBlob: string;
            lines: string;
            sendSuccess: string;
        };
    }

    interface Shadow {
        selectedCard: string;
    }
}

declare module '@mui/joy/IconButton' {
    interface IconButtonPropsSizeOverrides {
        xs: true;
    }
}
declare module '@mui/joy/Button' {
    interface ButtonPropsSizeOverrides {
        xs: true;
        md2: true;
    }
}
declare module '@mui/joy/Autocomplete' {
    interface AutocompletePropsSizeOverrides {
        xs: true;
    }
}

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                gradient: {
                    heroTxt:
                        'linear-gradient(90deg, rgba(11,107,203,1) 0%, rgba(61,153,245,1) 100%)',
                    blob: 'linear-gradient(180deg, rgba(207,229,252,1) 0%, rgba(207,229,252,0.2) 100%)',
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
            fontWeight: '600',
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
    shadow: {
        selectedCard: '0 0 16px 12px rgba(255, 255, 255,0.25)',
    },
    components: {
        JoyButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...{
                        borderRadius: '0.5rem',
                        '-webkit-tap-highlight-color': 'transparent',
                    },
                    ...(ownerState.size === 'xs' && {
                        '--Icon-fontSize': '0.586rem',
                        '--Button-gap': '0.234rem',
                        minHeight: '1.406rem',
                        fontSize: '0.469rem',
                        padding: '0.352rem 0.586rem',
                        borderRadius: '0.352rem',
                    }),
                    ...(ownerState.size === 'md2' && {
                        '--Button-gap': '0.234rem',
                        minHeight: '1.688rem',
                        fontSize: '0.528rem',
                        lineHeight: '1',
                        padding: '0.469rem 0.703rem',
                        borderRadius: '0.352rem',
                    }),
                }),
                endDecorator: {
                    fontSize: '1.2em',
                },
            },
        },
        JoyIconButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...{
                        borderRadius: '0.5rem',
                        '-webkit-tap-highlight-color': 'transparent',
                    },
                    ...(ownerState.size === 'xs' && {
                        fontSize: '0.586rem',
                        minHeight: '1.406rem',
                        minWidth: '1.406rem',
                        padding: '0.352rem',
                        borderRadius: '0.352rem',
                    }),
                }),
            },
        },
        JoyAutocomplete: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.size === 'xs' && {
                        '--Input-gap': '0.118rem',
                        fontSize: '0.674rem',
                        padding: '0.469rem 0.703rem',
                        minHeight: 'fit-content !important',
                    }),
                }),
                endDecorator: {
                    fontSize: '1.25em',
                },
            },
        },
        JoyInput: {
            styleOverrides: {
                root: {
                    borderRadius: '0.5rem',
                },
                startDecorator: {
                    fontSize: '1.3em',
                },
            },
        },
        JoyTextarea: {
            styleOverrides: {
                root: {
                    borderRadius: '0.5rem',
                    flexDirection: 'row',
                },
                startDecorator: {
                    fontSize: '1.3em',
                },
            },
        },
        JoyList: {
            styleOverrides: {
                root: {
                    '--ListDivider-gap': 'unset',
                    '--ListItem-minHeight': 'unset',
                    '--ListItem-paddingY': 'unset',
                    '--ListItem-paddingX': 'unset',
                },
            },
        },
    },
});

export default theme;

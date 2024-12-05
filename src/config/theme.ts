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
        overlayModal: string;
        categoryCardSelected: string;
        boxShadow69: string;
        productItem: string;
    }
}

declare module '@mui/joy/IconButton' {
    interface IconButtonPropsSizeOverrides {
        xs: true;
        xs2: true;
        xs3: true;
        xs4: true;
    }
}
declare module '@mui/joy/Button' {
    interface ButtonPropsSizeOverrides {
        xs: true;
        sm2: true;
        md2: true;
    }
}
declare module '@mui/joy/Autocomplete' {
    interface AutocompletePropsSizeOverrides {
        xs: true;
        md2: true;
    }
}
declare module '@mui/joy/FormControl' {
    interface FormControlPropsSizeOverrides {
        md2: true;
    }
}
declare module '@mui/joy/Input' {
    interface InputPropsSizeOverrides {
        md2: true;
    }
}
declare module '@mui/joy/Textarea' {
    interface TextareaPropsSizeOverrides {
        md2: true;
    }
}
declare module '@mui/joy/Checkbox' {
    interface CheckboxPropsSizeOverrides {
        md2: true;
    }
}
declare module '@mui/joy/Chip' {
    interface ChipPropsSizeOverrides {
        xs: true;
        productCard: true;
    }
}
declare module '@mui/joy/Select' {
    interface SelectPropsSizeOverrides {
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
        selectedCard: '0 0 1rem 0.75rem rgba(255, 255, 255,0.25)',
        overlayModal: '0 0 0.781rem 0.25rem rgba(255,255,255,1)',
        categoryCardSelected: '0 0 1rem 0.25rem rgba(11,107,203,1)',
        boxShadow69:
            'rgba(17, 17, 26, 0.1) 0px 0.063rem 0px, rgba(17, 17, 26, 0.1) 0px 0.5rem 1.5rem, rgba(17, 17, 26, 0.1) 0px 1rem 3rem',
        productItem: '0 0.063rem 0.25rem 0 rgba(0,0,0,0.5)',
    },
    components: {
        JoyButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...{
                        borderRadius: '0.5rem',
                        WebkitTapHighlightColor: 'transparent',
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
                    ...(ownerState.size === 'sm2' && {
                        '--Button-gap': '0.322em',
                        minHeight: '2.18em',
                        fontSize: '0.831rem',
                        fontWeight: '400',
                        lineHeight: '1.28',
                        padding: '0.25em 0.902em',
                        borderRadius: '0.602em',
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
                        WebkitTapHighlightColor: 'transparent',
                    },
                    ...(ownerState.size === 'xs' && {
                        fontSize: '0.586rem',
                        minHeight: '1.406rem',
                        minWidth: '1.406rem',
                        padding: '0.352rem',
                        borderRadius: '0.352rem',
                    }),
                    ...(ownerState.size === 'xs2' && {
                        fontSize: '0.75rem',
                        minHeight: '1.75rem',
                        minWidth: '1.75rem',
                        padding: '0.5rem',
                        borderRadius: '0.5rem',
                    }),
                    ...(ownerState.size === 'xs3' && {
                        fontSize: '0.41rem',
                        minHeight: '0.938rem',
                        minWidth: '0.938rem',
                        padding: '0.234rem',
                        borderRadius: '0.352rem',
                    }),
                    ...(ownerState.size === 'xs4' && {
                        fontSize: '0.41rem',
                        minHeight: '1.289rem',
                        maxHeight: '1.289rem',
                        minWidth: '1.289rem',
                        padding: '0',
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
                    ...(ownerState.size === 'md2' && {
                        '--Input-gap': '0.234rem',
                        maxHeight: '1.6rem',
                        padding: '0.323rem 0.352rem',
                        fontSize: '0.563rem',
                        lineHeight: '1.5',
                        borderRadius: '0.352rem !important',
                    }),
                }),
                endDecorator: {
                    fontSize: '1.25em',
                },
                startDecorator: {
                    fontSize: '1.3em',
                },
            },
        },
        JoyCheckbox: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.size === 'md2' && {
                        '--Checkbox-size': '0.563rem',
                        fontSize: '0.563rem',
                        gap: '0.234rem',
                    }),
                }),
                checkbox: {
                    borderRadius: '0.225em',
                },
            },
        },
        JoyChip: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.size === 'xs' && {
                        padding: '0.234rem 0.335rem !important',
                        fontSize: '0.563rem',
                        lineHeight: '1.5',
                        maxHeight: 'fit-content',
                    }),
                    ...(ownerState.size === 'productCard' && {
                        padding: '0 !important',
                        fontSize: '0.831rem',
                        lineHeight: '1.5',
                        gap: '0.25rem',
                        maxHeight: 'fit-content',
                        backgroundColor: 'transparent',
                    }),
                }),
            },
        },
        JoyFormControl: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.size === 'md2' && {
                        '--FormLabel-fontSize': '0.563rem',
                        '--FormLabel-lineHeight': '0.469rem',
                        '--FormLabel-margin': '0 0 0.234rem 0',
                        '--FormHelperText-fontSize': '0.563rem',
                        '--FormHelperText-lineHeight': '0.469rem',
                        '--FormHelperText-margin': '0.234rem 0 0 0',
                    }),
                }),
            },
        },
        JoyInput: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.size === 'md2' && {
                        '--Input-gap': '0.234rem',
                        padding: '0.323rem 0.352rem',
                        fontSize: '0.563rem',
                        lineHeight: '1.5',
                    }),
                    ...{
                        fontFamily: 'Inter',
                        borderRadius: '0.602em', //8px
                    },
                }),
                startDecorator: {
                    fontSize: '1.3em',
                },
            },
        },
        JoySelect: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.size === 'xs' && {
                        fontSize: '0.831rem',
                        maxHeight: '2.406em',
                        width: 'fit-content',
                        maxWidth: '5em',
                        padding: '0 0.602em',
                        borderRadius: '0.602em',
                        boxShadow: '0 0 0.594em 0.15em rgba(0,0,0,0.5)',
                    }),
                }),
                listbox: {
                    padding: '0.602em',
                    gap: '0.602em',
                    borderRadius: '0.602em',
                },
            },
        },
        JoyTextarea: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.size === 'md2' && {
                        '--Textarea-gap': '0.234rem',
                        padding: '0.323rem 0.352rem',
                        fontSize: '0.563rem',
                        lineHeight: '1.5',
                        borderRadius: '0.352rem',
                    }),
                    ...{
                        fontFamily: 'Inter',
                        borderRadius: '0.602em', //8px
                        flexDirection: 'row',
                    },
                }),
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

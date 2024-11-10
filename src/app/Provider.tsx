import { CssVarsProvider } from '@mui/joy';
import { ReactNode } from 'react';
import theme from 'src/config/theme';

export default function Provider({ children }: { children: ReactNode }) {
    return <CssVarsProvider theme={theme}>{children}</CssVarsProvider>;
}

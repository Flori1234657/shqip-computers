import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//@ts-expect-error no error as only the types are missing
import '@fontsource/inter';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);

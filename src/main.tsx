import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
//@ts-expect-error no error as only the types are missing
import '@fontsource/inter';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);

/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_REACT_APP_BACKEND: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

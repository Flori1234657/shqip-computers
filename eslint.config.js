import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import areslint from 'eslint-config-airbnb'
import artseslint from 'eslint-config-airbnb-typescript'
import pluginprettier from 'eslint-plugin-prettier'
import prettier from 'prettier'

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [
            areslint,
            artseslint,
            pluginprettier,
            js.configs.recommended,
            ...tseslint.configs.recommended,
        ],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            prettier: prettier,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
        },
    }
)

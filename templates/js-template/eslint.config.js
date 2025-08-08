import globals from 'globals';
import js from '@eslint/js';

import eslintConfigPrettier from 'eslint-config-prettier';
import pluginJest from 'eslint-plugin-jest';

export default [
    {
        ignores: ['node_modules/', 'dist/', '.vscode/'],
    },

    js.configs.recommended,

    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },

    {
        files: ['**/*.test.js', '**/*.spec.js', 'tests/**/*.js'],
        ...pluginJest.configs['flat/recommended'],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
        rules: {
            // You can add or override Jest-specific rules here if you want
        },
    },
    eslintConfigPrettier,
];
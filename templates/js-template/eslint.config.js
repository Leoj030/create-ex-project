import globals from 'globals';
import js from '@eslint/js';
import pluginJest from 'eslint-plugin-jest';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
    {
        ignores: [
            'node_modules/',
            'dist/',
            '.vscode/',
            'eslint.config.js',
            'jest.config.js',
        ],
    },

    js.configs.recommended,
    eslintPluginPrettierRecommended,

    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        rules: {
            'no-unused-vars': 'warn',
            'prettier/prettier': ['error', { endOfLine: 'auto' }],
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
    },
];

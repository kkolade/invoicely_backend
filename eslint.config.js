import pluginJs from '@eslint/js';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        process: 'readonly', // Add this line to define process as a global variable
      },
    },
  },
  pluginJs.configs.recommended,
  prettier,
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      quotes: ['error', 'single'],
      'prettier/prettier': ['error', { singleQuote: true }],
    },
  },
];

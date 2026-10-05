import globals from 'globals'

import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: 'airbnb',
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'object-curly-spacing': ['error', 'always'],
    },
  },
])

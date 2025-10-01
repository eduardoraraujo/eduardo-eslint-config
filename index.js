import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

export default [
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
    rules: {
      // ---------- STYLE REGRAS EDUARDO™ ----------
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          trailingComma: 'all',
          tabWidth: 2,
        },
      ],

      // ---------- IMPORTS ----------
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'], // node:* e libs externas
            ['internal'], // @/...
            ['parent', 'sibling', 'index'], // ./...
            ['unknown', 'object'], // css, svg...
          ],
          pathGroups: [
            { pattern: 'node:*', group: 'builtin', position: 'before' },
            { pattern: '@/**', group: 'internal', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'never', // ✅ SEM QUEBRA ENTRE GRUPOS
        },
      ],
      'import/no-unresolved': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
    },
    settings: {
      react: { version: 'detect' },
    },
  },
]

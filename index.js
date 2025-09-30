module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'import',
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  settings: {
    react: { version: 'detect' }
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
        tabWidth: 2
      }
    ],

    // ---------- IMPORTS ----------
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],     // node:* e libs externas
          ['internal'],                // @/...
          ['parent', 'sibling', 'index'], // ./...
          ['unknown', 'object']        // css, svg...
        ],
        pathGroups: [
          { pattern: 'node:*', group: 'builtin', position: 'before' },
          { pattern: '@/**', group: 'internal', position: 'after' }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'never' // ✅ SEM QUEBRA ENTRE GRUPOS
      }
    ],
    'import/no-unresolved': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error']
  }
}

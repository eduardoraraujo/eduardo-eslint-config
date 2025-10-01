# @eduardotools/eslint-config

Config ESLint + Prettier pra TS/React.

### Configuração

Crie `eslint.config.js` na raiz do seu projeto:

```js
import eslintConfig from '@eduardotools/eslint-config'

export default [
  ...eslintConfig,
  // Aqui você pode adicionar customizações específicas do projeto, se quiser
  // {
  //   rules: {
  //     'no-console': 'warn',
  //   },
  // },
]
```

Se você utiliza aliases (@) para imports, adicione a seguinte configuração:

```js
{
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
},
```

### Scripts

No `package.json`:

```json
"scripts": {
  "lint": "eslint . --ext .ts,.tsx,.js,.jsx",
  "lint:fix": "eslint . --ext .ts,.tsx,.js,.jsx --fix"
}
```

### Rodando

```bash
pnpm lint      # checa erros
pnpm lint:fix  # corrige erros que der
```

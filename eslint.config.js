import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
export default [
  { ignores: ['.next/**', 'node_modules/**'] },
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: { globals: globals.browser }
  },
  ...tseslint.configs.recommended
]

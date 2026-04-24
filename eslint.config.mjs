// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import css from '@eslint/css'

import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

export default defineConfig([...nextVitals, // Override default ignores of eslint-config-next.
globalIgnores([
  // Default ignores of eslint-config-next:
  '.next/**',
  'out/**',
  'build/**',
  'next-env.d.ts',
  'coverage/**',
  'package-lock.json',
]), {
  files: ['.lintstagedrc.js', '.eslintrc.js', '*.config.js'],
  languageOptions: { globals: globals.node },
  rules: { 'no-undef': 'off'}
}, {
  files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  plugins: { js },
  rules: { ...js.configs.recommended.rules },
  languageOptions: { globals: { ...globals.browser, ...globals.node } }
}, ...tseslint.configs.recommended, {
  files: ['**/*.json'],
  plugins: { json },
  language: 'json/json',
  rules: { ...json.configs.recommended.rules }
}, {
  files: ['**/*.jsonc'],
  plugins: { json },
  language: 'json/jsonc',
  rules: { ...json.configs.recommended.rules }
}, {
  files: ['**/*.json5'],
  plugins: { json },
  language: 'json/json5',
  rules: { ...json.configs.recommended.rules }
}, {
  files: ['**/*.md'],
  plugins: { markdown },
  language: 'markdown/commonmark',
  rules: { ...markdown.configs.recommended.rules }
}, {
  files: ['**/*.css'],
  plugins: { css },
  language: 'css/css',
  rules: { ...css.configs.recommended.rules, 'css/no-invalid-at-rules': 'off' }
}, ...storybook.configs["flat/recommended"]])

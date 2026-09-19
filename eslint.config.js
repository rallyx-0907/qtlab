import js from '@eslint/js'
import svelte from 'eslint-plugin-svelte'
import security from 'eslint-plugin-security'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Ignore build output and vendored code
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  // Base JS recommended rules
  js.configs.recommended,

  // Security plugin — flat config object
  security.configs.recommended,

  // Svelte flat/recommended handles .svelte files including the embedded scripts
  ...svelte.configs['flat/recommended'],

  // Global environment for browser + modern ES
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },
    },
  },
]
